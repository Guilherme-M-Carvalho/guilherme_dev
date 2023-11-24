import { Address } from ".."
import { AddressEntity } from "../../../entity/address.entity"
import { CreateAddressRepository } from "./create-address-repository"

interface CreateAddressProps {
    handleCreate(address: AddressEntity): Promise<AddressEntity>
}

export class CreateAddress implements CreateAddressProps{
    async handleCreate(address: AddressEntity): Promise<AddressEntity> {
        const obj = new Address(address)
        if(!obj.handleValidationEmpty()){
            throw new Error('{"message": "Endereço inválido"}')
        }
        if(!obj.handleValidationCep()){
            throw new Error('{"field": "cep", "message": "Cep inválido"}')
        }
        const repository = new CreateAddressRepository()
        return await repository.handleCreate(address)
    }
}