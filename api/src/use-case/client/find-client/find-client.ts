import { FindClientRepository } from "./find-client-repository";

export class FindClient {
    async handle(){
        const repository = new FindClientRepository()
        return await repository.handleFind()
    }
}