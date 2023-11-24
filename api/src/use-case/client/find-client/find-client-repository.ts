import AppDataSource from "../../../data-source";
import { ClientEntity } from "../../../entity/client.entity"
const repository = AppDataSource.getRepository(ClientEntity)

export class FindClientRepository {
    async handleFind(){
        try {
            return await repository.find({
                where: {
                    deleted: false
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