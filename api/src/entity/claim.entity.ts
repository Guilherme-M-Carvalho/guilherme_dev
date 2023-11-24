import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { CarEntity } from "./car.entity"
import { QuotationEntity } from "./quotation.entity"

@Entity('cad_claim')
export class ClaimEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column('text', { name: 'description', nullable: false })
    description: string

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @ManyToOne(() => CarEntity, (car) => car.claim)
    @JoinColumn({ name: 'id_car' })
    car?: CarEntity

    @OneToMany(() => QuotationEntity, quotation => quotation.claim)
    quotation?: QuotationEntity[]

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date

}
