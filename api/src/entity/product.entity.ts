import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { CarEntity } from "./car.entity"
import { CarModelEntity } from "./car-model.entity"
import { ProductStockEntity } from "./product-stock.entity"

@Entity('cad_product')
export class ProductEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id?: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @Column('text', { name: 'description', nullable: false })
    description: string

    @ManyToOne(() => CarModelEntity, (model) => model.car, { nullable: false })
    @JoinColumn({ name: 'id_model' })
    model: CarModelEntity | number

    @OneToMany(() => ProductStockEntity, productStock => productStock.product, { cascade: ['insert', 'update'], nullable: false })
    productStock?: ProductStockEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted?: boolean

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'create_date', precision: 0, nullable: false, select: false })
    createDate?: Date

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'update_date', precision: 0, onUpdate: 'CURRENT_TIMESTAMP', nullable: false, select: false })
    updateDate?: Date
}
