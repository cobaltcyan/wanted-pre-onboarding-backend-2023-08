import express from 'express';
// import userTokenValidate from '../middlewares/userTokenValidate';

// import communityRouter from './communityRouter';
import userController from '../controllers/userController';
import postingController from '../controllers/postingController';
const postingRouter = express.Router();

postingRouter.post('/create', postingController.postNewPosting);             // 과제 3. 게시글 작성
postingRouter.get('/list', postingController.getAllPosting);                 // 과제 4. 게시글 목록 조회
postingRouter.get('/info/:id', postingController.getPostingById);            // 과제 5. 특정 게시글 조회
postingRouter.patch('/info/:id', postingController.patchPostingById);        // 과제 6. 특정 게시글 수정
postingRouter.delete('/info/:id', postingController.deletePostingById);      // 과제 7. 특정 게시글 삭제

export default postingRouter;