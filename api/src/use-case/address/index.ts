import { AddressEntity } from "../../entity/address.entity";

export class Address extends AddressEntity {
    constructor(props: AddressEntity) {
        super()
        const { address, cep, complement, locality, neighborhood, number, uf, client, createDate, deleted, id, updateDate } = props
        this.address = address
        this.cep = cep
        this.complement = complement
        this.locality = locality
        this.neighborhood = neighborhood
        this.number = number
        this.uf = uf
        this.client = client
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.updateDate = updateDate
    }

    handleValidationEmpty(){
        if(!this.cep){
            throw new Error('{"field": "cep", "message": "Cep inválido"}')
        }
        if(!this.address){
            throw new Error('{"field": "address", "message": "Logradouro inválido"}')
        }
        if(!this.neighborhood){
            throw new Error('{"field": "neighborhood", "message": "Bairro inválido"}')
        }
        if(!this.locality){
            throw new Error('{"field": "locality", "message": "Cidade inválida"}')
        }
        if(!this.uf){
            throw new Error('{"field": "uf", "message": "UF inválido"}')
        }
        if(!this.number){
            throw new Error('{"field": "number", "message": "Número inválido"}')
        }
        return true
    }

    handleValidationCep(){
        if(String(this.cep).length !== 8){
            throw new Error('{"field": "cep", "message": "Cep inválido"}')
        }
        return true
    }
}