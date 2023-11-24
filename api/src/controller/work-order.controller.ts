import { Request, Response } from "express";
import { CreateWorkOrder } from "../use-case/work-order/create-work-order/create-work-order";

export class WorkOrderController {
    async handleCreate(req: Request, res: Response){
        const data = req.body
        const useCase = new CreateWorkOrder()
        const create = await useCase.handleCreate(data)
        res.send(create)
    }
}