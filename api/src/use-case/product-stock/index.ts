import { ProductStockEntity } from "../../entity/product-stock.entity";
import { Product } from "../product";

export class ProductStock extends ProductStockEntity {
    constructor(props: ProductStockEntity) {
        super()
        const {
            cost,
            id,
            price,
            createDate,
            deleted,
            product,
            updateDate
        } = props
        this.cost = cost
        this.id = id
        this.price = price
        this.createDate = createDate
        this.deleted = deleted
        this.product = product
        this.updateDate = updateDate
    }

    validation() {
        if (!this.cost) {
            throw new Error('{"field": "cost", "message": "Custo inválido!"}')
        }
        if (!this.price) {
            throw new Error('{"field": "price", "message": "Preço inválido!"}')
        }
        return true
    }

    validationMinPrice() {
        const minPrice = (20 / 100) * this.cost
        if ((this.cost + minPrice) > this.price) {
            throw new Error('{"field": "price", "message": "O preço deve ser no minímo 20% a mais que o custo!"}')
        }
        return true
    }
}