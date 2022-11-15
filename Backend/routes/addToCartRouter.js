import express from 'express';
import { sendProduct } from '../controllers/sendProductController.js';

export const addToCartRouter = express.Router();

addToCartRouter.route('/addtocart/:title').get(sendProduct);