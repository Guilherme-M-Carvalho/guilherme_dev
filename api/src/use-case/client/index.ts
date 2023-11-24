import { ClientEntity } from "../../entity/client.entity";
import { Address } from "../address";
import { Car } from "../car";
import { Contact } from "../contact";

export class Client extends ClientEntity {

    constructor(props: ClientEntity) {
        super()
        const {
            car,
            cpf,
            createDate,
            deleted,
            id,
            name,
            updateDate,
            address,
            contact,
        } = props
        this.car = car
        this.cpf = cpf
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.name = name
        this.updateDate = updateDate
        this.address = address
        this.contact = contact
    }

    validationCPF() {
        let cpf = String(this.cpf)
        let validation = true
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') validation = false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            validation = false;
        // Valida 1o digito	
        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            validation = false;
        // Valida 2o digito	
        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            validation = false;
        validation = true;
        if (!validation) {
            throw new Error('{"field": "cpf", "message": "CPF inválido!"}')
        }
        return validation
    }

    async validation() {
        if (!this.name) {
            throw new Error('{"field": "name", "message": "Nome inválido!"}')
        }
        if (!this.cpf) {
            throw new Error('{"field": "cpf", "message": "CPF inválido!"}')
        }
        if (!this.validationCPF()) {
            throw new Error('{"field": "cpf", "message": "CPF inválido!"}')
        }
        if (this.address) {
            const addressObj = new Address(this.address)
            addressObj.handleValidationEmpty()
            addressObj.handleValidationCep()
        }
        if (this.contact) {
            this.contact.forEach(contact => {
                new Contact(contact).validation()
            })
            this.contact.reduce((acc, at, indexAtual) => {
                if(acc.telephone === at.telephone){
                    throw new Error(`{"field": "telephone", "message": "Telefone duplicado!", "index": "${indexAtual}"}`)
                }
                return at
            })
        }
        this.car.reduce((acc, at, indexAtual) => {
            if(acc.plate === at.plate){
                throw new Error(`{"field": "plate", "message": "Placa duplicada!", "index": "${indexAtual}"}`)
            }
            return at
        })
        await Promise.all(this.car.map(async (car, index) => {
            car.claim.reduce((acc, at, indexAtual) => {
                if(acc.description === at.description){
                    throw new Error(`{"field": "description", "message": "Descrição do problema duplicado!", "index": "${indexAtual}", "indexParent": "${index}"}`)
                }
                return at
            })
            new Car(car).validation()
            await new Car(car).validationModel()
        }))


        return true
    }
}