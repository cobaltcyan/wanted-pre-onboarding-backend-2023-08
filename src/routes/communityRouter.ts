import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';

// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/communityController';
const communityRouter = express.Router();

communityRouter.post('/posting', communityController.postNewPosting);
communityRouter.get('/posting', communityController.getAllPosting);
communityRouter.get('/posting/:id', communityController.getPostingById);
communityRouter.patch('/posting/:id', communityController.patchPostingById);
communityRouter.delete('/posting/:id', communityController.deletePostingById);

export default communityRouter;