import AppDataSource from "../../../data-source";
import { ProductEntity } from "../../../entity/product.entity"
const repository = AppDataSource.getRepository(ProductEntity)

export class FindProductRepository {
    async handleFind(){
        try {
            return await repository.find({
                where: {
                    deleted: false
                }, 
                relations: {
                    productStock: true
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}