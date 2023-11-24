import { FindOneWorkOrderTypeRepository } from "./find-one-work-order-type-repository";

export class FindOneWorkOrderType{
    async handle({id}: {id: number}){
        const workOrderType = await new FindOneWorkOrderTypeRepository().handle({id})
        return workOrderType
    }
}