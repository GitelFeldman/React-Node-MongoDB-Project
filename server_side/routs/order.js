import express from "express"
import mongoose from "mongoose";
import * as orderController from "../controllers/order.js"

import {auth,authAdmin} from '../middlewares/auth.js'
const router = express.Router();
router.get("/",authAdmin, orderController.getallOrders)
router.get("/myOrders",auth,orderController.getMyOrders )
router.delete("/:id",orderController.deletOrderById)
router.post("/",auth,orderController.addOrder)
router.put("/:id",authAdmin,orderController.updateOrder)

export default router;