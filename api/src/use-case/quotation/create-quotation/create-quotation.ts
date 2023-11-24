import { Quotation } from ".."
import { QuotationEntity } from "../../../entity/quotation.entity"
import { FindOneClaim } from "../../claim/find-one-claim/find-one-claim"
import { CreateQuotationRepository } from "./create-quotation-repository"

interface CreateQuotationProps {
    handleCreate(quotation: QuotationEntity): Promise<QuotationEntity>
}

export class CreateQuotation implements CreateQuotationProps{
    async handleCreate(quotation: QuotationEntity): Promise<QuotationEntity> {
        const obj = new Quotation(quotation)
        if(!obj.validation() || !await obj.validationType()){
            throw new Error('{"message": "Cotação inválida!"}')
        }
        obj.handleCalculatePrice()
        obj.handleCalculateExpectedTime()

        try{
            await new FindOneClaim().handle({id: Number(obj.claim)})
        } catch (err){
            throw new Error('{"field": "claim","message": "Alegação não existe"}')
        }

        const repository = new CreateQuotationRepository()
        return await repository.handleCreate(obj)
    }
}