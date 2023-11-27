import AppDataSource from "../../../data-source";
import { ProductEntity } from "../../../entity/product.entity"

const repository = AppDataSource.getRepository(ProductEntity);

interface UpdateProductRepositoryProps {
    handleUpdate(product: ProductEntity): Promise<ProductEntity>
}

export class UpdateProductRepository implements UpdateProductRepositoryProps {
    async handleUpdate(product: ProductEntity): Promise<ProductEntity> {
        try {
            return await repository.save(product)
        } catch(err){
            throw new Error("internal error");
        }
    }
}