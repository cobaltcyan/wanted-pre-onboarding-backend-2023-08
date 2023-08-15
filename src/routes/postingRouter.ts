import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';

// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/postingController';
const communityRouter = express.Router();

communityRouter.post('/posting', communityController.postNewPosting);               // 과제 3
communityRouter.get('/posting', communityController.getAllPosting);                 // 과제 4
communityRouter.get('/posting/:id', communityController.getPostingById);            // 과제 5
communityRouter.patch('/posting/:id', communityController.patchPostingById);        // 과제 6
communityRouter.delete('/posting/:id', communityController.deletePostingById);      // 과제 7

export default communityRouter;