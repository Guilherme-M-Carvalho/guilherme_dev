import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CarEntity } from "./car.entity"

@Entity('lst_car_model')
export class CarModelEntity {

    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: number

    @Column('varchar', { name: 'name', length: 255, nullable: false })
    name: string

    @OneToMany(() => CarEntity, car => car.model, { cascade: ['insert', 'update'], nullable: false })
    car: CarEntity[]

    @Column("boolean", { name: 'deleted', nullable: false, default: false, select: true })
    deleted: boolean
}
