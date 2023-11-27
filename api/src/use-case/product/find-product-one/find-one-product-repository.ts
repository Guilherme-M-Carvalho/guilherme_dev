import AppDataSource from "../../../data-source";
import { ProductEntity } from "../../../entity/product.entity"
const repository = AppDataSource.getRepository(ProductEntity)

export class FindProductOneRepository {
    async handleFind({id}: {id:number}){
        try {
            return await repository.findOne({
                where: {
                    deleted: false,
                    id: id
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