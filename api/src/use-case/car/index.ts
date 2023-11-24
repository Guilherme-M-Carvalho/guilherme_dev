import { CarEntity } from "../../entity/car.entity";
import { FindOneCarModel } from "../car-model/find-one-car-model/find-one-car-model";
import { Claim } from "../claim";

export class Car extends CarEntity {
    constructor(props: CarEntity) {
        super()
        const {
            claim,
            client,
            createDate,
            deleted,
            description,
            id,
            model,
            name,
            plate,
            updateDate,
            year
        } = props
        this.claim = claim
        this.client = client
        this.createDate = createDate
        this.deleted = deleted
        this.description = description
        this.id = id
        this.model = model
        this.name = name
        this.plate = plate
        this.updateDate = updateDate
        this.year = year
    }

    validation() {
        if (!this.name) {
            throw new Error('{"field": "name", "message": "Nome do carro inválido!"}')
        }
        if (!this.description) {
            throw new Error('{"field": "description", "message": "Descrição do carro inválido!"}')
        }
        if (String(this.plate).length !== 7) {
            throw new Error('{"field": "plate", "message": "Placa do carro inválida!"}')
        }
        if (!this.year || new Date(this.year) > new Date()) {
            throw new Error('{"field": "year", "message": "Ano do carro inválido!"}')
        }
        if (!this.model) {
            throw new Error('{"field": "model", "message": "Modelo do carro inválido!"}')
        }
        this.claim.forEach(claim => {
            new Claim(claim).validation()
        })
    }

    async validationModel(){
        const findModel = await new FindOneCarModel().handle({
            id: Number(this.model)
        })
        if(!findModel){
            throw new Error('{"field": "model", "message": "Modelo do carro não existe!"}')
        }
        return true
    }
}