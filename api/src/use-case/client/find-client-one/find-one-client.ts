import { FindClientOneRepository } from "./find-one-client-repository";

export class FindOneClient {
    async handle({id}: {id:number}){
        const repository = new FindClientOneRepository()
        const client = await repository.handleFind({id})
        if(!client){
            throw new Error('{"message": "Cliente não existe!"}')
        }
        return client
    }
}