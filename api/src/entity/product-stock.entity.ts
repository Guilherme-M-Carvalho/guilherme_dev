import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { ProductEntity } from "./product.entity"

@Entity('cad_product_stock')
export class ProductStockEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column("decimal", { name: 'price', nullable: false, precision: 10, scale: 2 })
    price: number;

    @Column("decimal", { name: 'cost', nullable: false, precision: 10, scale: 2 })
    cost: number;

    @ManyToOne(() => ProductEntity, (product) => product.productStock, { cascade: ['insert', 'update'], nullable: false })
    @JoinColumn({ name: 'id_product' })
    product?: ProductEntity | number

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}
