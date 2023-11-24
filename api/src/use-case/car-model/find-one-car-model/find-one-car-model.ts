import { FindOneCarModelRepository } from "./find-one-car-model-repository";

export class FindOneCarModel{
    async handle({id}: {id: number}){
        const carModel = await new FindOneCarModelRepository().handle({id})
        return carModel
    }
}