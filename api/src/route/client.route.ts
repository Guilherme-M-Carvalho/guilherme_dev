import { Router } from "express"
import { ClientController } from "../controller/client.controller"

const clientRoutes = Router()
const controller = new ClientController()

clientRoutes.delete("/:id", controller.handleDelete)
clientRoutes.put("/", controller.handleUpdate)
clientRoutes.post("/", controller.handleCreate)
clientRoutes.get("/", controller.handleFind)
clientRoutes.get("/:id", controller.handleFindOne)

export {clientRoutes}
