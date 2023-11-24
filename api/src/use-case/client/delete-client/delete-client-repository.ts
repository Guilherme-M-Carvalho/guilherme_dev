import AppDataSource from "../../../data-source";
import { ClientEntity } from "../../../entity/client.entity"
const repository = AppDataSource.getRepository(ClientEntity)

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