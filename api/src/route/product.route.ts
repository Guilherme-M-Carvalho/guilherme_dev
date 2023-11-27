import { Router } from "express"
import { ProductController } from "../controller/product.controller"

const productRoutes = Router()
const controller = new ProductController()

productRoutes.delete("/:id", controller.handleDelete)
productRoutes.put("/", controller.handleUpdate)
productRoutes.post("/", controller.handleCreate)
productRoutes.get("/", controller.handleFind)
productRoutes.get("/:id", controller.handleFindOne)

export { productRoutes }
