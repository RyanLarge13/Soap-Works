import express from "express";
import { renderMenWomen } from "../controllers/menWomenController.js";
import { menWomenFilter } from "../middleware/menWomenMiddleware.js";

export const menWomenRouter = express.Router();

menWomenRouter.route("/men").get(menWomenFilter, renderMenWomen);
menWomenRouter.route("/women").get(menWomenFilter, renderMenWomen);
