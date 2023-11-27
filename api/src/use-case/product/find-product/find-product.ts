import { FindProductRepository } from "./find-product-repository";

export class FindProduct {
    async handle(){
        const repository = new FindProductRepository()
        return await repository.handleFind()
    }
}