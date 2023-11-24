import { ClaimEntity } from "../../entity/claim.entity";

export class Claim extends ClaimEntity {
    constructor(props: ClaimEntity) {
        super()
        const {
            description,
            id,
            car,
            createDate,
            deleted,
            quotation,
            updateDate
        } = props
        this.description = description
        this.id = id
        this.car = car
        this.createDate = createDate
        this.deleted = deleted
        this.quotation = quotation
        this.updateDate = updateDate
    }

    validation(){
        if(!this.description){
            throw new Error('{"field": "description", "message": "Descrição do problema inválido!"}')
        }
    }
}