import { Router } from "express"
import { ProductStockController } from "../controller/product-stock.controller"

const productStockRoutes = Router()
const controller = new ProductStockController()

// productStockRoutes.delete("/:id", controller.handleDelete)
// productStockRoutes.put("/", controller.handleUpdate)
productStockRoutes.post("/", controller.handleCreate)
productStockRoutes.get("/", controller.handleFind)
// productStockRoutes.get("/:id", controller.handleFindOne)

export { productStockRoutes }
