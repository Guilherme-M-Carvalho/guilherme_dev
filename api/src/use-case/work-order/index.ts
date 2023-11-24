import { QuotationEntity } from "../../entity/quotation.entity";
import { WorkOrderEntity } from "../../entity/work-order.entity";
import { FindOneWorkOrderType } from "../work-order-type/find-work-order-type/find-one-work-order-type";

export class WorkOrder extends WorkOrderEntity {
    constructor(props: WorkOrderEntity){
        super()
        const {
            endDate,
            expectationDate,
            observation,
            price,
            quotation,
            startDate,
            type,
            createDate,
            deleted,
            id,
            updateDate
        } = props
        this.endDate = endDate
        this.expectationDate = expectationDate
        this.observation = observation
        this.price = price
        this.quotation = quotation
        this.startDate = startDate
        this.type = type
        this.createDate = createDate
        this.deleted = deleted
        this.id = id
        this.updateDate = updateDate
    }

    validation(){
        if(!this.quotation){
            throw new Error('{"field": "quotation", "message": "Cotação inválida!"}')
        }
        if(!this.price){
            throw new Error('{"field": "price", "message": "Preço inválido!"}')
        }
        if(!this.type){
            throw new Error('{"field": "type", "message": "Tipo do pedido inválido!"}')
        }
        if(!this.startDate || new Date(this.startDate) < new Date()){
            throw new Error('{"field": "startDate", "message": "Data de início inválida!"}')
        }
        return true
    }

    handleExpectationDate(quotation: QuotationEntity){
        this.expectationDate = new Date(this.startDate)
        this.expectationDate.setHours(this.expectationDate.getHours() + quotation.expectedTime)
    }

    async validationType(){
        const findType = await new FindOneWorkOrderType().handle({
            id: Number(this.type)
        })
        if(!findType){
            throw new Error('{"field": "type", "message": "Tipo do pedido não existe!"}')
        }
        return true
    }
}