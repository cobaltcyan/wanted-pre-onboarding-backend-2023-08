import express from 'express';
const userRouter = express.Router();
// import userTokenValidate from '../middlewares/userTokenValidate';
// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
// import communityController from '../controllers/communityController';

userRouter.post('/signup', userController.postSignup);
// userRouter.post('/signin', userController.postSignin);

export default userRouter;