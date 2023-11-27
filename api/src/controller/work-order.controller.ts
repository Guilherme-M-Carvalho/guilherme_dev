import { Request, Response } from "express";
import { CreateWorkOrder } from "../use-case/work-order/create-work-order/create-work-order";
import { FindWorkOrder } from "../use-case/work-order/find-work-order/find-work-order";
import { FindOneWorkOrder } from "../use-case/work-order/find-work-order-one/find-one-work-order";
import { DeleteWorkOrder } from "../use-case/work-order/delete-work-order/delete-work-order";
import { UpdateWorkOrder } from "../use-case/work-order/update-work-order/update-work-order";

export class WorkOrderController {
    async handleCreate(req: Request, res: Response){
        const data = req.body
        const useCase = new CreateWorkOrder()
        const create = await useCase.handleCreate(data)
        res.send(create)
    }
    async handleFind(req: Request, res: Response){
        const useCase = new FindWorkOrder()
        const find = await useCase.handle()
        res.send(find)
    }
    async handleFindOne(req: Request, res: Response){
        const useCase = new FindOneWorkOrder()
        const find = await useCase.handle({id:  Number(req.params.id)})
        res.send(find)
    }
    async handleDelete(req: Request, res: Response){
        const useCase = new DeleteWorkOrder()
        const find = await useCase.handle({id: Number(req.params.id)})
        res.send(find)
    }
    async handleUpdate(req: Request, res: Response) {
        const data = req.body
        const useCase = new UpdateWorkOrder()
        const update = await useCase.handleUpdate(data)
        res.send(update)
    }
}