import { FindOneWorkOrder } from "../find-work-order-one/find-one-work-order";
import { DeleteRepository } from "./delete-work-order-repository";

export class DeleteWorkOrder {
    async handle({ id }: { id: number }) {
        await new FindOneWorkOrder().handle({id: id})
        const repository = new DeleteRepository()
        const client = await repository.handleDelete({ id })
        return {message: "Ordem de serviço deletado com sucesso"}
    }
}