import express from "express"
import mongoose from "mongoose";
import* as itemController from "../controllers/item.js"

import {auth,authAdmin} from '../middlewares/auth.js'
const router = express.Router();
router.get("/", itemController.getallItem)
router.get("/:itemid",itemController.getItemById )
router.delete("/:id",authAdmin,itemController.deletItemById)
router.post("/",authAdmin,itemController.addItem)
router.put("/:id",authAdmin, itemController.updateItem)
export default router;
