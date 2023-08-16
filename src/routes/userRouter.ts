import express from 'express';
import userController from '../controllers/userController';
const userRouter = express.Router();

userRouter.post('/signup', userController.postSignup);      // 과제 1. 회원가입
userRouter.post('/signin', userController.postSignin);      // 과제 2. 로그인

export default userRouter;