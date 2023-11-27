import { FindOneQuotation } from "../find-quotation-one/find-one-quotation";
import { DeleteRepository } from "./delete-quotation-repository";

export class DeleteQuotation {
    async handle({ id }: { id: number }) {
        await new FindOneQuotation().handle({id: id})
        const repository = new DeleteRepository()
        const client = await repository.handleDelete({ id })
        return {message: "Cliente deletado com sucesso"}
    }
}