import { FindOneQuotationTypeRepository } from "./find-one-quotation-type-repository";

export class FindOneQuotationType{
    async handle({id}: {id: number}){
        const carModel = await new FindOneQuotationTypeRepository().handle({id})
        return carModel
    }
}