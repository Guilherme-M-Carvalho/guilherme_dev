import AppDataSource from "../../../data-source";
import { ClientEntity } from "../../../entity/client.entity"
const repository = AppDataSource.getRepository(ClientEntity)

export class FindClientOneRepository {
    async handleFind({id}: {id:number}){
        try {
            return await repository.findOne({
                where: {
                    deleted: false,
                    id: id
                }, 
                relations: {
                    address: true,
                    car: true,
                    contact: true,
                }
            })
        } catch (error) {
            throw new Error("Internal error!")
        }
    }
}