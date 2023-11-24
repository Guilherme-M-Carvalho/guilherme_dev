import { FindQuotationOneRepository } from "./find-one-quotation-repository";

export class FindOneQuotation {
    async handle({id}: {id:number}){
        const repository = new FindQuotationOneRepository()
        const client = await repository.handleFind({id})
        if(!client){
            throw new Error('{"message": "Cotação não existe!"}')
        }
        return client
    }
}