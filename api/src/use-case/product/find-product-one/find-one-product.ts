import { FindProductOneRepository } from "./find-one-product-repository";

export class FindOneProduct {
    async handle({id}: {id:number}){
        const repository = new FindProductOneRepository()
        const client = await repository.handleFind({id})
        if(!client){
            throw new Error('{"message": "Produto não existe!"}')
        }
        return client
    }
}