import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';
import communutityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/communityController';
const router = express.Router();

router.post('/posting', communityController.postNewPosting);
router.get('/posting', communityController.getAllPosting);
router.get('/posting/:id', communityController.getPostingById);
router.patch('/posting/:id', communityController.patchPostingById);
router.delete('/posting/:id', communityController.deletePostingById);

export default router;