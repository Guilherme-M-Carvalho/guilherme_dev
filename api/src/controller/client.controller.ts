import { Request, Response } from "express";
import { CreateClient } from "../use-case/client/create-client/create-client";
import { FindClient } from "../use-case/client/find-client/find-client";
import { FindOneClient } from "../use-case/client/find-client-one/find-one-client";
import { ClientDto } from "../dto/client.dto";
import { UpdateClient } from "../use-case/client/update-client/update-client";
import { DeleteClient } from "../use-case/client/delete-client/delete-client";

export class ClientController {
    async handleCreate(req: Request, res: Response) {
        const data = req.body
        const useCase = new CreateClient()
        const create = await useCase.handleCreate(data)
        res.send(create)
    }
    async handleUpdate(req: Request, res: Response) {
        const data = req.body
        const useCase = new UpdateClient()
        const update = await useCase.handleUpdate(data)
        res.send(update)
    }
    async handleFind(req: Request, res: Response){
        const useCase = new FindClient()
        const find = await useCase.handle()
        res.send(find)
    }
    async handleDelete(req: Request, res: Response){
        const useCase = new DeleteClient()
        const find = await useCase.handle({id: Number(req.params.id)})
        res.send(find)
    }
    async handleFindOne(req: Request, res: Response){
        const dto = new ClientDto()
        const validation = dto.handleFindOne({ id: Number(req.params.id) })
        const useCase = new FindOneClient()
        const find = await useCase.handle(validation)
        res.send(find)
    }
}