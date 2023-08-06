import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';
import communutityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/communityController';
const router = express.Router();

router.post('/signup', userController.postSignup);
router.post('/signin', userController.postSignin);

export default router;