import { WorkOrder } from "..";
import { WorkOrderEntity } from "../../../entity/work-order.entity";
import { CreateWorkOrderRepository } from "./create-work-order-repository";

export class CreateWorkOrder{
    async handleCreate(work: WorkOrderEntity){
        const obj = new WorkOrder(work)
        if(!obj.validation() || !await obj.validationType()){
            throw new Error('{"message": "Pedido inválido"}')
        }

        const repository = new CreateWorkOrderRepository()
        const quotation = await repository.handleValidationQuotation(Number(obj.quotation))
        if(!quotation){
            throw new Error('{"field": "quotation", "message": "Cotação inválida!"}')
        }
        obj.handleExpectationDate(quotation)
        return await repository.handleCreate(obj)
    }
}