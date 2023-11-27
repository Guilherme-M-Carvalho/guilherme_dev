import AppDataSource from "../../../data-source";
import { ProductEntity } from "../../../entity/product.entity"

const repository = AppDataSource.getRepository(ProductEntity);

interface CreateProductRepositoryProps {
    handleCreate(product: ProductEntity): Promise<ProductEntity>
}

export class CreateProductRepository implements CreateProductRepositoryProps {
    async handleCreate(product: ProductEntity): Promise<ProductEntity> {
        try {
            return await repository.save(product)
        } catch(err){
            throw new Error("internal error");
        }
    }
}