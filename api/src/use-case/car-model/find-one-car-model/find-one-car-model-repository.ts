import AppDataSource from "../../../data-source";
import { CarModelEntity } from "../../../entity/car-model.entity";
const repository = AppDataSource.getRepository(CarModelEntity)

interface FindOneCarModelRepositoryProps {
    handle({id}: {id: number}): Promise<CarModelEntity | null>
}

export class FindOneCarModelRepository implements FindOneCarModelRepositoryProps{
     async handle({ id }: { id: number; }): Promise<CarModelEntity | null> {
        try {
            return await repository.findOne({
                where: {
                    id: id,
                    deleted: false
                }
            })
        } catch(err){
            throw new Error("Internal error!")
        }
    }
}