import AppDataSource from "../../../data-source";
import { ClientEntity } from "../../../entity/client.entity"

const repository = AppDataSource.getRepository(ClientEntity);

interface CreateClientRepositoryProps {
    handleCreate(client: ClientEntity): Promise<ClientEntity>
    handleValidationCpf(cpf: number): Promise<ClientEntity | null>
}

export class CreateClientRepository implements CreateClientRepositoryProps {
    async handleCreate(client: ClientEntity): Promise<ClientEntity> {
        try {
            return await repository.save(client)
        } catch(err){
            throw new Error("internal error");
        }
    }

    async handleValidationCpf(cpf: number){
        try {
            return await repository.findOne({
                where: {
                    cpf: cpf,
                }
            })
        } catch(err){
            throw new Error("internal error");
        }
    }
}