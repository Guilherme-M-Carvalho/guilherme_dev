import { Router } from "express"
import { QuotationController } from "../controller/quotation.controller"

const quotationRoutes = Router()
const controller = new QuotationController()

quotationRoutes.put("/", controller.handleUpdate)
quotationRoutes.post("/", controller.handleCreate)
quotationRoutes.get("/", controller.handleFind)
quotationRoutes.get("/:id", controller.handleFindOne)
quotationRoutes.delete("/:id", controller.handleDelete)

export {quotationRoutes}
