import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity"
const repository = AppDataSource.getRepository(QuotationEntity)

export class FindQuotationOneRepository {
    async handleFind({id}: {id:number}){
        try {
            return await repository.findOne({
                where: {
                    deleted: false,
                    id: id
                }, 
                relations: {
                    claim: {
                        car: {
                            client: true
                        }
                    },
                    work: true,
                    workOrder: true
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}