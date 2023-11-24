import { Client } from ".."
import { ClientEntity } from "../../../entity/client.entity"
import { FindOneClient } from "../find-client-one/find-one-client"
import { UpdateClientRepository } from "./update-client-repository"

interface UpdateClientProps {
    handleUpdate(client: ClientEntity): Promise<ClientEntity>
}

export class UpdateClient implements UpdateClientProps{
    async handleUpdate(client: ClientEntity): Promise<ClientEntity> {
        const obj = new Client(client)
        const { cpf, id } = client
        await new FindOneClient().handle({ id: Number(id) })
        if(!await obj.validation()){
            throw new Error('{"message": "Cliente inválido!"}')
        }
        const repository = new UpdateClientRepository()
        const validation = await repository.handleValidationCpf(Number(cpf),  Number(id))
        if(!!validation){
            throw new Error('{"message": "Cliente já cadastrado!"}')
        }
        return await repository.handleUpdate(client)
    }
}