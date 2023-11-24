import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity"
const repository = AppDataSource.getRepository(QuotationEntity)

export class FindQuotationRepository {
    async handleFind(){
        try {
            return await repository.find({
                where: {
                    deleted: false
                }, 
                relations: {
                    claim: {
                        car: {
                            client: true
                        }
                    },
                    work: true

                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}