import AppDataSource from "../../../data-source";
import { ProductStockEntity } from "../../../entity/product-stock.entity"

const repository = AppDataSource.getRepository(ProductStockEntity);

interface CreateProductStockRepositoryProps {
    handleCreate(product: ProductStockEntity): Promise<ProductStockEntity>
}

export class CreateProductStockRepository implements CreateProductStockRepositoryProps {
    async handleCreate(product: ProductStockEntity): Promise<ProductStockEntity> {
        try {
            return await repository.save(product)
        } catch(err){
            throw new Error("internal error");
        }
    }
}