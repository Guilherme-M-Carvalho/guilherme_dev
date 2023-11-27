import { WorkOrder } from "..";
import { WorkOrderEntity } from "../../../entity/work-order.entity";
import { FindOneWorkOrder } from "../find-work-order-one/find-one-work-order";
import { UpdateWorkOrderRepository } from "./update-work-order-repository";

export class UpdateWorkOrder{
    async handleUpdate(work: WorkOrderEntity){
        const obj = new WorkOrder(work)
        await new FindOneWorkOrder().handle({ id: Number(work.id) })
        if(!obj.validation() || !await obj.validationType()){
            throw new Error('{"message": "Pedido inválido"}')
        }

        const repository = new UpdateWorkOrderRepository()
        const quotation = await repository.handleValidationQuotation(Number(obj.quotation))
        if(!quotation){
            throw new Error('{"field": "quotation", "message": "Cotação inválida!"}')
        }
        obj.handleExpectationDate(quotation)
        return await repository.handleUpdate(obj)
    }
}