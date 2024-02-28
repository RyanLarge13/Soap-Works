import express from "express";
import { renderShoppingCart } from "../controllers/shoppingCartController.js";

export const shoppingCartRouter = express.Router();

shoppingCartRouter.route("/cart").get(renderShoppingCart);
