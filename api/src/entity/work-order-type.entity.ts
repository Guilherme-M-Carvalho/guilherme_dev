import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { WorkOrderEntity } from "./work-order.entity"

@Entity('lst_work_order_type')
export class WorkOrderTypeEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @OneToMany(() => WorkOrderEntity, workOrder => workOrder.type, { cascade: ['insert', 'update'], nullable: false })
    workOrder: WorkOrderEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted: boolean
}
