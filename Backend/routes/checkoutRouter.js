import express from 'express';
import { renderStripe } from '../controllers/checkoutController.js';

export const checkoutRouter = express.Router();

checkoutRouter.route('/checkout').post(renderStripe);