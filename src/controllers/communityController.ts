import express from 'express';
import userTokenValidate from '../middlewares/userTokenValidate';
import communutityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/communityController';
const router = express.Router();

router.post('/posting', communityController.postNewPosting);
router.get('/posting', communityController.getAllPost);
router.get('/posting/:id', communityController.getPostById);
router.patch('/posting/:id', communityController.patchPostById);
router.delete('/posting/:id', communityController.deletePostingById);

export default router;