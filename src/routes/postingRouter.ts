import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';

// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
import communityController from '../controllers/postingController';
const communityRouter = express.Router();

communityRouter.post('/create', communityController.postNewPosting);             // 과제 3. 게시글 작성
communityRouter.get('/list', communityController.getAllPosting);                 // 과제 4. 게시글 목록 조회
communityRouter.get('/info/:id', communityController.getPostingById);            // 과제 5. 특정 게시글 조회
communityRouter.patch('/info/:id', communityController.patchPostingById);        // 과제 6. 특정 게시글 수정
communityRouter.delete('/info/:id', communityController.deletePostingById);      // 과제 7. 특정 게시글 삭제

export default communityRouter;