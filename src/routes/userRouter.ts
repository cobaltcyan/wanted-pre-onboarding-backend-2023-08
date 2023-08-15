import express from 'express';
const userRouter = express.Router();
// import userTokenValidate from '../middlewares/userTokenValidate';
// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
// import communityController from '../controllers/communityController';

userRouter.post('/signup', userController.postSignup);      // 과제 1. 회원가입
userRouter.post('/signin', userController.postSignin);      // 과제 2. 로그인

export default userRouter;