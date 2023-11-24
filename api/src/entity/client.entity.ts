import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from "typeorm"
import { CarEntity } from "./car.entity"
import { AddressEntity } from "./address.entity"
import { ContactEntity } from "./contact.entity"
import { QuotationEntity } from "./quotation.entity"

@Entity('cad_client')
export class ClientEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id_client' })
    id?: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @Column("bigint", { name: 'cpf', nullable: false, width: 11, unique: true})
    cpf: number

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted: boolean

    @OneToMany(() => CarEntity, car => car.client, { cascade: ['insert', 'update'], nullable: false })
    car: CarEntity[]

    @OneToOne(() => AddressEntity, add => add.client, { cascade: ['insert', 'update'], nullable: true, orphanedRowAction: "delete"  })
    @JoinColumn({ name: 'id_address' })
    address?: AddressEntity

    @OneToMany(() => ContactEntity, contact => contact.clientId, { cascade: ['insert', 'update'], nullable: true })
    contact?: ContactEntity[]

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate: Date

}
