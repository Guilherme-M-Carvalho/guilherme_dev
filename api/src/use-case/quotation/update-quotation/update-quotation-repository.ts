import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity"

const repository = AppDataSource.getRepository(QuotationEntity);

interface UpdateQuotationRepositoryProps {
    handleUpdate(quotation: QuotationEntity): Promise<QuotationEntity>
}

export class UpdateQuotationRepository implements UpdateQuotationRepositoryProps {
    async handleUpdate(quotation: QuotationEntity): Promise<QuotationEntity> {
        try {
            return await repository.save(quotation)
        } catch(err){
            throw new Error("internal error");
            
        }
    }

    async handleExistWorkOrder(id: number): Promise<QuotationEntity | null> {
        try {
            return await repository.findOne({
                where: {
                    workOrder: {
                        quotation: {id: id},
                        deleted: false
                    }
                },
                relations: {
                    workOrder: true
                }
            })
        } catch(err){
            throw new Error("internal error");
            
        }
    }
    
}