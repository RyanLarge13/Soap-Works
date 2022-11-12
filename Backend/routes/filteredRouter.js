import express from "express";
import { filterSoaps } from "../controllers/filteredSoapsController.js";
import { filter } from "../middleware/filterMiddleware.js";

export const filteredRouter = express.Router();

filteredRouter.route("/soaps").get(filter, filterSoaps);
filteredRouter.route("/kits").get(filter, filterSoaps);
