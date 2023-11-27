import { FindWorkOrderOneRepository } from "./find-one-work-order-repository";

export class FindOneWorkOrder {
    async handle({id}: {id:number}){
        const repository = new FindWorkOrderOneRepository()
        const workOrder = await repository.handleFind({id})
        if(!workOrder){
            throw new Error('{"message": "Ordem de serviço não existe!"}')
        }
        return workOrder
    }
}