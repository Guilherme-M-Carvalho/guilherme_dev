import { Router } from "express"
import { CarController } from "../controller/car.controller"

const carRoutes = Router()
const controller = new CarController()

carRoutes.post("/", controller.handleCreate)

export {carRoutes}
