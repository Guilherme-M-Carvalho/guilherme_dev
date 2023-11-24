import { Client } from ".."
import { ClientEntity } from "../../../entity/client.entity"
import { CreateClientRepository } from "./create-client-repository"

interface CreateClientProps {
    handleCreate(client: ClientEntity): Promise<ClientEntity>
}

export class CreateClient implements CreateClientProps{
    async handleCreate(client: ClientEntity): Promise<ClientEntity> {
        const obj = new Client(client)
        const { cpf } = client
        if(!await obj.validation()){
            throw new Error('{"message": "Cliente inválido!"}')
        }
        const repository = new CreateClientRepository()
        const validation = await repository.handleValidationCpf(Number(cpf))
        if(!!validation){
            throw new Error('{"message": "Cliente já cadastrado!"}')
        }
        return await repository.handleCreate(client)
    }
}