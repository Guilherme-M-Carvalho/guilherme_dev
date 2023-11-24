import { FindOneClient } from "../find-client-one/find-one-client";
import { DeleteRepository } from "./delete-client-repository";

export class DeleteClient {
    async handle({ id }: { id: number }) {
        await new FindOneClient().handle({id: id})
        const repository = new DeleteRepository()
        const client = await repository.handleDelete({ id })
        return {messge: "Cliente deletado com sucesso"}
    }
}