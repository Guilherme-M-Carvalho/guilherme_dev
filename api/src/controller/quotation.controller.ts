import { Request, Response } from "express";
import { CreateQuotation } from "../use-case/quotation/create-quotation/create-quotation";
import { FindQuotation } from "../use-case/quotation/find-quotation/find-quotation";
import { FindOneQuotation } from "../use-case/quotation/find-quotation-one/find-one-quotation";
import { DeleteQuotation } from "../use-case/quotation/delete-quotation/delete-quotation";
import { UpdateQuotation } from "../use-case/quotation/update-quotation/update-quotation";

export class QuotationController {
    async handleCreate(req: Request, res: Response) {
        const data = req.body
        const useCase = new CreateQuotation()
        const create = await useCase.handleCreate(data)
        res.send(create)
    }

    async handleUpdate(req: Request, res: Response) {
        const data = req.body
        const useCase = new UpdateQuotation()
        const create = await useCase.handleUpdate(data)
        res.send(create)
    }

    async handleFind(req: Request, res: Response){
        const useCase = new FindQuotation()
        const find = await useCase.handle()
        res.send(find)
    }

    async handleFindOne(req: Request, res: Response){
        const useCase = new FindOneQuotation()
        const find = await useCase.handle({ id: Number(req.params.id) })
        res.send(find)
    }

    async handleDelete(req: Request, res: Response){
        const useCase = new DeleteQuotation()
        const find = await useCase.handle({id: Number(req.params.id)})
        res.send(find)
    }
}