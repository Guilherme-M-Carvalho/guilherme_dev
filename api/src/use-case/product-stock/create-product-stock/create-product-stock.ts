import { ProductStock } from ".."
import { ProductStockEntity } from "../../../entity/product-stock.entity"
import { CreateProduct } from "../../product/create-product/create-product"
import { FindOneProduct } from "../../product/find-product-one/find-one-product"
import { CreateProductStockRepository } from "./create-product-stock-repository"

interface CreateProductStockProps {
    handleCreate(product: ProductStockEntity[]): Promise<ProductStockEntity[]>
}

export class CreateProductStock implements CreateProductStockProps {
    async handleCreate(product: ProductStockEntity[]): Promise<ProductStockEntity[]> {
        const repository = new CreateProductStockRepository()
        const stock: ProductStockEntity[] = []
        const useCase = new CreateProduct()

        await Promise.all(product.map(async (el) => {
            const obj = new ProductStock(el)
            if (!obj.validation() || !obj.validationMinPrice()) {
                throw new Error('{"message": "Estoque inválido!"}')
            }
        }))

        const productCreate = product[0].product

        if (typeof productCreate !== "number" && productCreate) {
            const create = (await useCase.handleCreate(productCreate)).id
            product = product.map(el => {
                return {
                    ...el,
                    product: create
                }
            })
        }

        await Promise.all(product.map(async (el) => {
            await new FindOneProduct().handle({ id: Number(el.product) })
            stock.push(await repository.handleCreate(el))
        }))

        return stock
    }
}