import { Product } from ".."
import { ProductEntity } from "../../../entity/product.entity"
import { CreateProductRepository } from "./create-product-repository"

interface CreateProductProps {
    handleCreate(product: ProductEntity): Promise<ProductEntity>
}

export class CreateProduct implements CreateProductProps{
    async handleCreate(product: ProductEntity): Promise<ProductEntity> {
        const obj = new Product(product)
        if(!await obj.validation() || !await obj.validationModel()){
            throw new Error('{"message": "Produto inválido!"}')
        }
        const repository = new CreateProductRepository()
        return await repository.handleCreate(product)
    }
}