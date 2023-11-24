import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CarEntity } from "./car.entity"
import { QuotationEntity } from "./quotation.entity"

@Entity('lst_quotation_type')
export class QuotationTypeEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @OneToMany(() => QuotationEntity, quotation => quotation.type, { cascade: ['insert', 'update'], nullable: false })
    quotation: QuotationEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted: boolean
}
