import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { ClientEntity } from "./client.entity"
import { QuotationEntity } from "./quotation.entity"
import { ClaimEntity } from "./claim.entity"
import { CarModelEntity } from "./car-model.entity"

@Entity('cad_car')
export class CarEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id_car' })
    id: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @Column('text', { name: 'description', nullable: false })
    description: string

    @Column('char', { name: 'plate', nullable: false, length: 7 })
    plate: string

    @Column('date', { name: 'year', nullable: false})
    year: Date

    @ManyToOne(() => CarModelEntity, (model) => model.car, { cascade: ['insert', 'update'], nullable: false })
    @JoinColumn({ name: 'id_model' })
    model: CarModelEntity | number

    @OneToMany(() => ClaimEntity, car => car.car, { cascade: ['insert', 'update'], nullable: false })
    claim: ClaimEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @ManyToOne(() => ClientEntity, (client) => client.car, { nullable: false })
    client?: ClientEntity

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}
