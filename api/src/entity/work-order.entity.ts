import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne, OneToMany } from "typeorm";
import { QuotationEntity } from "./quotation.entity";
import { WorkOrderTypeEntity } from "./work-order-type.entity";


@Entity('cad_work_order')
export class WorkOrderEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @ManyToOne(() => QuotationEntity, (quotation) => quotation.workOrder, { nullable: false })
    @JoinColumn({ name: 'id_quotation' })
    quotation: WorkOrderTypeEntity

    @Column("decimal", { name: 'price', nullable: false, precision: 10, scale: 2 })
    price: number;

    @Column("text", { name: 'observation', nullable: true })
    observation: number;

    @CreateDateColumn({ type: 'datetime', name: 'start_date', nullable: false })
    startDate: Date

    @CreateDateColumn({ type: 'datetime', name: 'end_date', nullable: true, default: () => 'null' })
    endDate?: Date
    
    @CreateDateColumn({ type: 'datetime', name: 'expectation_date', nullable: false })
    expectationDate: Date

    @ManyToOne(() => WorkOrderTypeEntity, (type) => type.workOrder, { cascade: ['insert', 'update'], nullable: false })
    @JoinColumn({ name: 'id_type' })
    type: WorkOrderTypeEntity

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}