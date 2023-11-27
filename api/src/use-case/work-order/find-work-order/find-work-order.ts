import { FindWorkOrderRepository } from "./find-work-order-repository";

export class FindWorkOrder {
    async handle(){
        const repository = new FindWorkOrderRepository()
        return await repository.handleFind()
    }
}