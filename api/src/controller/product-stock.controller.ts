import { Request, Response } from "express";
import { CreateProductStock } from "../use-case/product-stock/create-product-stock/create-product-stock";
import { CreateProduct } from "../use-case/product/create-product/create-product";
import { ProductStockDto } from "../dto/product-stock.dto";
import { FindProductStock } from "../use-case/product-stock/find-product-stock/find-product-stock";


export class ProductStockController {
    async handleCreate(req: Request, res: Response) {
        const data = req.body
        const dto = new ProductStockDto()
        const validation = dto.handleCreate(data)
        const useCase = new CreateProductStock()
        const create = await useCase.handleCreate(validation)
        res.send(create)
    }
    async handleFind(req: Request, res: Response){
        const useCase = new FindProductStock()
        const find = await useCase.handle()
        res.send(find)
    }
}