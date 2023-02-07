import express from "express";
import * as controller from "../controller/productsController.js";
const router = express.Router();

router.get("/", controller.getAll);

export default router;
