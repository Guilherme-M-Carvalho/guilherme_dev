import { FindProductStockRepository } from "./find-product-stock-repository";

export class FindProductStock {
    async handle(){
        const repository = new FindProductStockRepository()
        return await repository.handleFind()
    }
}