import express from 'express';
import database from '../config/database';
import userTokenValidate from '../middlewares/userTokenValidate';
import userRouter from './userRouter';
import postingRouter from './postingRouter';
const router = express.Router();

router.get('/api/token', userTokenValidate.validateToken);    // middleware 확인

router.use('/api/user', userRouter);        // 과제 1, 과제 2
router.use('/api/posting', postingRouter);  // 과제 3, 과제 4, 과제 5, 과제 6, 과제 7

export default router; 