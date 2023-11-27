import { ProductEntity } from "../../entity/product.entity";
import { FindOneCarModel } from "../car-model/find-one-car-model/find-one-car-model";

export class Product extends ProductEntity {

    constructor(props: ProductEntity) {
        super()
        const {
            createDate,
            deleted,
            id,
            name,
            updateDate,
            description,
            model,
            productStock
        } = props
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.name = name
        this.updateDate = updateDate
        this.description = description
        this.model = model
        this.productStock = productStock

    }

    async validation() {
        if (!this.name) {
            throw new Error('{"field": "name", "message": "Nome inválido!"}')
        }
        if (!this.model) {
            throw new Error('{"field": "model", "message": "Modelo inválido!"}')
        }
        if (!this.description) {
            throw new Error('{"field": "description", "message": "Descrição inválido!"}')
        }
        return true
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