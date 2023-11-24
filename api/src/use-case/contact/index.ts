import { ContactEntity } from "../../entity/contact.entity";

export class Contact extends ContactEntity {
    constructor(props: ContactEntity) {
        super()
        const {
            ddi,
            telephone,
            clientId,
            createDate,
            deleted,
            id,
            updateDate
        } = props
        this.ddi = ddi
        this.telephone = telephone
        this.clientId = clientId
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.updateDate = updateDate
    }

    validation(){
        if(!this.ddi){
            throw new Error('{"field": "ddi", "message": "DDI inválido!"}')
        }
        if(!this.telephone || String(this.telephone).length < 10){
            throw new Error('{"field": "telephone", "message": "Telefone inválido!"}')
        }
        return true
    }
}