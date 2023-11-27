import { ProductStockEntity } from "../entity/product-stock.entity";
import { ProductEntity } from "../entity/product.entity";

interface ProductStockDtoProps {
    handleCreate(props: {amount: number; cost: number; price: number; product: ProductEntity | number}): ProductStockEntity[]
}

export class ProductStockDto implements ProductStockDtoProps {
    handleCreate({amount, cost, price, product}: { amount: number; cost: number; price: number; product: ProductEntity | number }): ProductStockEntity[] {
        const productStock: ProductStockEntity[] = []
        if (amount < 1) {
            throw new Error('{"field": "amount", "message": "Quantidade inválida!"}')
        }
        if (!product) {
            throw new Error('{"field": "product", "message": "Produto inválido!"}')
        }
        for (let index = 0; index < amount; index++) {
            productStock.push({
                cost,
                price,
                product
            })
        }
        return productStock
    }
}