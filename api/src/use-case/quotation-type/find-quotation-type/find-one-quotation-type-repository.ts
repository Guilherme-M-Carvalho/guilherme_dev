import AppDataSource from "../../../data-source";
import { QuotationTypeEntity } from "../../../entity/quotation-type.entity";
const repository = AppDataSource.getRepository(QuotationTypeEntity)

interface FindOneQuotationTypeRepositoryProps {
    handle({id}: {id: number}): Promise<QuotationTypeEntity | null>
}

export class FindOneQuotationTypeRepository implements FindOneQuotationTypeRepositoryProps{
     async handle({ id }: { id: number; }): Promise<QuotationTypeEntity | null> {
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