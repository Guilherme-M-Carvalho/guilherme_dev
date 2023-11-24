import { Quotation } from ".."
import { QuotationEntity } from "../../../entity/quotation.entity"
import { FindOneClaim } from "../../claim/find-one-claim/find-one-claim"
import { FindOneQuotation } from "../find-quotation-one/find-one-quotation"
import { UpdateQuotationRepository } from "./update-quotation-repository"

interface UpdateQuotationProps {
    handleUpdate(quotation: QuotationEntity): Promise<QuotationEntity>
}

export class UpdateQuotation implements UpdateQuotationProps{
    async handleUpdate(quotation: QuotationEntity): Promise<QuotationEntity> {
        const obj = new Quotation(quotation)
        await new FindOneQuotation().handle({id: Number(obj.id)})

        
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



        const repository = new UpdateQuotationRepository()

        if(!!await repository.handleExistWorkOrder(Number(obj.id))){
            throw new Error('{"message": "Não é possível alterar essa cotação pois já existe pedido de compra"}')
        }

        return await repository.handleUpdate(obj)
    }
}