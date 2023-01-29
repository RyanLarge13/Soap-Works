import express from 'express';
import { tamperedClient } from '../middleware/tamperedClient.js';
import { renderStripe } from '../controllers/checkoutController.js';

export const checkoutRouter = express.Router();

checkoutRouter.route('/checkout').post(tamperedClient, renderStripe);