import { Not } from "typeorm";
import AppDataSource from "../../../data-source";
import { ClientEntity } from "../../../entity/client.entity"

const repository = AppDataSource.getRepository(ClientEntity);

interface UpdateClientRepositoryProps {
    handleUpdate(client: ClientEntity): Promise<ClientEntity>
    handleValidationCpf(cpf: number, id: number): Promise<ClientEntity | null>
}

export class UpdateClientRepository implements UpdateClientRepositoryProps {
    async handleUpdate(client: ClientEntity): Promise<ClientEntity> {
        try {
            return await repository.save(client)
        } catch(err){
            throw new Error("internal error");
        }
    }

    async handleValidationCpf(cpf: number, id: number){
        try {
            return await repository.findOne({
                where: {
                    cpf: cpf,
                    id: Not(id)
                }
            })
        } catch(err){
            throw new Error("internal error");
        }
    }
}