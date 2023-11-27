import AppDataSource from "../../../data-source";
import { WorkOrderEntity } from "../../../entity/work-order.entity"
const repository = AppDataSource.getRepository(WorkOrderEntity)

export class DeleteRepository {
    async handleDelete({id}: {id:number}){
        try {
            return await repository.update({
                id: id
            }, {
                deleted: true
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}