import AppDataSource from "../../../data-source";
import { ProductEntity } from "../../../entity/product.entity"
const repository = AppDataSource.getRepository(ProductEntity)

export class DeleteRepository {
    async handleDelete({id}: {id:number}){
        try {
            return await repository.update({
                id: id
            }, {
                deleted: true
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}