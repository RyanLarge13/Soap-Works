import express from "express";
import { renderProduct } from "../controllers/productController.js";

export const productRouter = express.Router();

productRouter.route("/:type/:id").get(renderProduct);
