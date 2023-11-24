import AppDataSource from "../../../data-source";
import { QuotationEntity } from "../../../entity/quotation.entity"

const repository = AppDataSource.getRepository(QuotationEntity);

interface CreateQuotationRepositoryProps {
    handleCreate(quotation: QuotationEntity): Promise<QuotationEntity>
}

export class CreateQuotationRepository implements CreateQuotationRepositoryProps {
    async handleCreate(quotation: QuotationEntity): Promise<QuotationEntity> {
        try {
            return await repository.save(quotation)
        } catch(err){
            console.log({err});
            throw new Error("internal error");
            
        }
    }
}