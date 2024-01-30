import express from 'express';
import { userLogin } from '../controllers/userController.js';
const router = express.Router();

router.get('/user', userLogin);

export default router;