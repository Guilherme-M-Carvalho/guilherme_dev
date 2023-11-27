import { Product } from ".."
import { ProductEntity } from "../../../entity/product.entity"
import { FindOneProduct } from "../find-product-one/find-one-product"
import { UpdateProductRepository } from "./update-product-repository"

interface UpdateProductProps {
    handleUpdate(product: ProductEntity): Promise<ProductEntity>
}

export class UpdateProduct implements UpdateProductProps{
    async handleUpdate(product: ProductEntity): Promise<ProductEntity> {
        const obj = new Product(product)
        await new FindOneProduct().handle({id: Number(product.id)})
        if(!await obj.validation() || !await obj.validationModel()){
            throw new Error('{"message": "Produto inválido!"}')
        }
        const repository = new UpdateProductRepository()
        return await repository.handleUpdate(product)
    }
}