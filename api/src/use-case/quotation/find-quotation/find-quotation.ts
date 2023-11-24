import { FindQuotationRepository } from "./find-quotation-repository";

export class FindQuotation {
    async handle(){
        const repository = new FindQuotationRepository()
        return await repository.handleFind()
    }
}