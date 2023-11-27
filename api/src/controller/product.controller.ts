import { Request, Response } from "express";
import { CreateProduct } from "../use-case/product/create-product/create-product";
import { FindProduct } from "../use-case/product/find-product/find-product";
import { DeleteProduct } from "../use-case/product/delete-product/delete-product";
import { FindOneProduct } from "../use-case/product/find-product-one/find-one-product";
import { UpdateProduct } from "../use-case/product/update-product/update-product";

export class ProductController {
    async handleCreate(req: Request, res: Response) {
        const data = req.body
        const useCase = new CreateProduct()
        const create = await useCase.handleCreate(data)
        res.send(create)
    }
    async handleUpdate(req: Request, res: Response) {
        const data = req.body
        const useCase = new UpdateProduct()
        const update = await useCase.handleUpdate(data)
        res.send(update)
    }
    async handleFind(req: Request, res: Response){
        const useCase = new FindProduct()
        const find = await useCase.handle()
        res.send(find)
    }
    async handleDelete(req: Request, res: Response){
        const useCase = new DeleteProduct()
        const find = await useCase.handle({id: Number(req.params.id)})
        res.send(find)
    }
    async handleFindOne(req: Request, res: Response){
        // const dto = new ProductDto()
        // const validation = dto.handleFindOne()
        const useCase = new FindOneProduct()
        const find = await useCase.handle({ id: Number(req.params.id) })
        res.send(find)
    }
}