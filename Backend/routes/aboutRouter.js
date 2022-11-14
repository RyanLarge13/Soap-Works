import express from 'express';
import { renderAbout } from '../controllers/aboutController.js';

export const aboutRouter = express.Router();

aboutRouter.route('/about').get(renderAbout);