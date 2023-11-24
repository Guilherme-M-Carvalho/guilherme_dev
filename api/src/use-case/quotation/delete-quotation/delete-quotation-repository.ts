import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity"
const repository = AppDataSource.getRepository(QuotationEntity)

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