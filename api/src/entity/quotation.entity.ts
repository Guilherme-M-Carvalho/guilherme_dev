import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { ClaimEntity } from "./claim.entity";
import { QuotationTypeEntity } from "./quotation-type.entity";
import { WorkEntity } from "./work.entity";
import { WorkOrderEntity } from "./work-order.entity";


@Entity('cad_quotation')
export class QuotationEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("decimal", { name: 'price', nullable: false, precision: 10, scale: 2 })
    price: number;

    @Column("text", { name: 'description', nullable: false })
    description: number;

    @ManyToOne(() => ClaimEntity, (claim) => claim.quotation, {nullable: false})
    @JoinColumn({ name: 'id_claim' })
    claim: ClaimEntity | number

    @OneToMany(() => WorkEntity, work => work.quotation, { cascade: ['insert', 'update'], nullable: false })
    work: WorkEntity[]

    @ManyToOne(() => QuotationTypeEntity, (model) => model.quotation, { cascade: ['insert', 'update'], nullable: false })
    @JoinColumn({ name: 'id_type' })
    type: QuotationTypeEntity

    @Column("int", { name: 'expected_time', nullable: false, width: 4 })
    expectedTime: number;

    @OneToMany(() => WorkOrderEntity, work => work.quotation, { cascade: ['insert', 'update'], nullable: false })
    workOrder?: WorkOrderEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}