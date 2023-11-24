import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ClientEntity } from "./client.entity";
import { QuotationEntity } from "./quotation.entity";


@Entity('cad_work')
export class WorkEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("text", { name: 'description', nullable: false })
    description: number;

    @Column("int", { name: 'expected_time', nullable: false, width: 4 })
    expectedTime: number;

    @Column("decimal", { name: 'price', nullable: false, precision: 10, scale: 2 })
    price: number;

    @ManyToOne(() => QuotationEntity, (quotation) => quotation.work, { nullable: true })
    @JoinColumn({ name: 'id_quotation' })
    quotation?: QuotationEntity

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}