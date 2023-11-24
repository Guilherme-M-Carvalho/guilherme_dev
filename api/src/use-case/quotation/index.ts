import { WorkEntity } from "../../entity/work.entity";
import { QuotationEntity } from "../../entity/quotation.entity";
import { FindOneQuotationType } from "../quotation-type/find-quotation-type/find-one-quotation-type";
import { Work } from "../work";

export class Quotation extends QuotationEntity {
    constructor(props: QuotationEntity){
        super()
        const {
            claim,
            description,
            expectedTime,
            price,
            type,
            work,
            createDate,
            deleted,
            id,
            updateDate,
            workOrder
        } = props

        this.claim = claim
        this.description = description
        this.expectedTime = expectedTime
        this.price = price
        this.type = type
        this.work = work
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.updateDate = updateDate
        this.workOrder = workOrder
    }
    validation(){
        if(!this.description){
            throw new Error('{"field": "description", "message": "Descrição inválido!"}')
        }
        if(!this.type){
            throw new Error('{"field": "type", "message": "Tipo inválido!"}')
        }
        if(!this.claim){
            throw new Error('{"field": "claim", "message": "Alegação inválida!"}')
        }
        this.work.forEach(work => {
            new Work(work).validation()
        })
        this.work.reduce((acc, at, indexAtual) => {
            if(acc.description === at.description){
                throw new Error(`{"field": "description", "message": "Descrição do trabalho duplicado!", "index": "${indexAtual}"}`)
            }
            return at
        })
        return true
    }

    async validationType(){
        const findType = await new FindOneQuotationType().handle({
            id: Number(this.type)
        })
        if(!findType){
            throw new Error('{"field": "type", "message": "Tipo de cotação não existe!"}')
        }
        return true
    }

    handleCalculateExpectedTime(){
        const workCalculate = [...this.work]
        this.expectedTime = workCalculate.reduce((acc, at) => acc += at.expectedTime, 0)
    }

    handleCalculatePrice(){
        const workCalculate = [...this.work]
        this.price = workCalculate.reduce((acc, at) => acc += at.price, 0)
    }
}