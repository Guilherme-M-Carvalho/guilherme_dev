import AppDataSource from "../../../data-source";
import { AddressEntity } from "../../../entity/address.entity"

const repository = AppDataSource.getRepository(AddressEntity);

interface CreateAddressRepositoryProps {
    handleCreate(client: AddressEntity): Promise<AddressEntity>
}

export class CreateAddressRepository implements CreateAddressRepositoryProps {
    async handleCreate(client: AddressEntity): Promise<AddressEntity> {
        try {
            return await repository.save(client)
        } catch(err){
            throw new Error("internal error");
        }
    }

}