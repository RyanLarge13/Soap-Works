import express from "express";
import { renderContact } from '../controllers/contactController.js';

export const contactRouter = express.Router();

contactRouter.route('/contact').get(renderContact);