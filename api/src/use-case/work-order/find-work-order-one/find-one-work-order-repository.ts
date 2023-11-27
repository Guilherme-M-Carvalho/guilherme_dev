import AppDataSource from "../../../data-source";
import { WorkOrderEntity } from "../../../entity/work-order.entity"
const repository = AppDataSource.getRepository(WorkOrderEntity)

export class FindWorkOrderOneRepository {
    async handleFind({id}: {id:number}){
        try {
            return await repository.findOne({
                where: {
                    deleted: false,
                    id: id
                }, 
                relations: {
                    quotation: {
                        claim: {
                            car: true
                        },
                        work: true
                    },
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}