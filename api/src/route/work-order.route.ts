import { Router } from "express"
import { WorkOrderController } from "../controller/work-order.controller"

const workOrderRoutes = Router()
const controller = new WorkOrderController()

workOrderRoutes.put("/", controller.handleUpdate)
workOrderRoutes.post("/", controller.handleCreate)
workOrderRoutes.get("/", controller.handleFind)
workOrderRoutes.get("/:id", controller.handleFindOne)
workOrderRoutes.delete("/:id", controller.handleDelete)

export {workOrderRoutes}
