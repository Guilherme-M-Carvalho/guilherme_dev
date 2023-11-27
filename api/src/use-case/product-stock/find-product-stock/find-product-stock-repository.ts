import AppDataSource from "../../../data-source";
import { ProductStockEntity } from "../../../entity/product-stock.entity"
const repository = AppDataSource.getRepository(ProductStockEntity)

export class FindProductStockRepository {
    async handleFind(){
        try {
            return await repository.find({
                where: {
                    deleted: false
                }, 
                relations: {
                    product: true
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}