import express from 'express';
import { createBilling, getBillings } from '../controllers/billingController';

const router = express.Router();

router.post('/', createBilling);
router.get('/', getBillings);

export default router;
