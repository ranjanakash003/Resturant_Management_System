import express from 'express';
import { createOrderDetail, getOrderDetails } from '../controllers/orderDetailsController';

const router = express.Router();

router.post('/', createOrderDetail);
router.get('/', getOrderDetails);

export default router;
