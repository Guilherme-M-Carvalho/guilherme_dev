import AppDataSource from "../../../data-source";
import { WorkOrderEntity } from "../../../entity/work-order.entity"
const repository = AppDataSource.getRepository(WorkOrderEntity)

export class FindWorkOrderRepository {
    async handleFind(){
        try {
            return await repository.find({
                where: {
                    deleted: false
                }, 
                relations: {
                    quotation: true,
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}