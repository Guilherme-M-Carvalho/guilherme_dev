import AppDataSource from "../../../data-source";
import { WorkOrderTypeEntity } from "../../../entity/work-order-type.entity";
const repository = AppDataSource.getRepository(WorkOrderTypeEntity)

interface FindOneWorkOrderTypeRepositoryProps {
    handle({id}: {id: number}): Promise<WorkOrderTypeEntity | null>
}

export class FindOneWorkOrderTypeRepository implements FindOneWorkOrderTypeRepositoryProps{
     async handle({ id }: { id: number; }): Promise<WorkOrderTypeEntity | null> {
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