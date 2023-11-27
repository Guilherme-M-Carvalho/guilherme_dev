import { FindOneProduct } from "../find-product-one/find-one-product";
import { DeleteRepository } from "./delete-product-repository";

export class DeleteProduct {
    async handle({ id }: { id: number }) {
        await new FindOneProduct().handle({id: id})
        const repository = new DeleteRepository()
        const product = await repository.handleDelete({ id })
        return {message: "Produto deletado com sucesso"}
    }
}