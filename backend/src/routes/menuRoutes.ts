import express from 'express';
import { createMenuItem, getMenuItems } from '../controllers/menucontroller';

const router = express.Router();

router.post('/', createMenuItem);
router.get('/', getMenuItems);

export default router;
