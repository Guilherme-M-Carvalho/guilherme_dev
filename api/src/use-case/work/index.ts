import { WorkEntity } from "../../entity/work.entity";

export class Work extends WorkEntity {
    constructor(props: WorkEntity){
        super()
        const {
            description,
            expectedTime,
            price,
            createDate,
            deleted,
            id,
            quotation,
            updateDate
        } = props
        this.description = description
        this.expectedTime = expectedTime
        this.price = price
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.quotation = quotation
        this.updateDate = updateDate
    }

    validation(){
        if(!this.description){
            throw new Error('{"field": "description", "message": "Descrição do trabalho inválido!"}')
        }
        if(!this.expectedTime){
            throw new Error('{"field": "expectedTime", "message": "Expectativa do trabalho inválida!"}')
        }
        if(!this.expectedTime || this.expectedTime < 0){
            throw new Error('{"field": "price", "message": "Preço do trabalho inválido!"}')
        }
        return true
    }
}