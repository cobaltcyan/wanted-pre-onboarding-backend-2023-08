import express from 'express';
const userRouter = express.Router();
// import userTokenValidate from '../middlewares/userTokenValidate';
// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
// import communityController from '../controllers/communityController';

userRouter.post('/signup', userController.postSignup);      // 과제 1  
userRouter.post('/signin', userController.postSignin);      // 과제 2

export default userRouter;