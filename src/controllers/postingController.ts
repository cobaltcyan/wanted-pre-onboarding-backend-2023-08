import { Request, Response, NextFunction } from 'express';
import postingService from '../services/postingService';
import PostingDto from '../dto/PostingDto';
import PostingCreateDto from '../dto/PostingCreateDto';
import UserDto from '../dto/UserDto';
import postingRepository from '../repositories/postingRepository';

const postingController = {

    /** 과제 3. 새로운 게시글 생성 */
    async postNewPosting(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const {
                // id,
                // userId,
                title,
                content,         // <br> 처리 유무?
            } = req.body;

            const newPostingInfo = {
                // id,
                // userId,
                title,
                content,
                // hidden,
                // createdAt,
                // createdId
            };

            const newPosting = await postingService.postNewPosting(newPostingInfo);
            if (newPosting) {
                return res.status(200).json({
                    message: "새 글이 등록되었습니다.",
                    data: {
                        newPosting
                    }
                });
            }
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "게시글을 작성할 수 없습니다."
            });
        }
    },

    /** 과제 4. 게시글 목록 조회 */
    async getAllPosting(req: Request, res: Response, next: NextFunction) {
        try {
            // const { user_id } = req.body;   // token 이 있는채로 조회하게 할 예정(회원만 가능)? 아니얌.. 전체 열어주자!
            
            const findPostingList = await postingService.getPostingAll();
            if (findPostingList) {
                return res.status(200).json({
                    message: "성공적으로 게시글 목록을 조회하였습니다.",
                    data: {
                        findPostingList
                    }
                });
            } else {
                return findPostingList
            }
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "게시글 목록을 불러올 수 없습니다."
            });
        }
    },

    /** 과제 5. 특정 게시글 조회 */
    async getPostingById(req: Request, res: Response, next: NextFunction) {
        try {
            const { posting_id } = req.body;
            
            const findPosting = await postingService.getPostingById(posting_id);
            if (findPosting) {
                return res.status(200).json({
                    message: "성공적으로 게시글을 조회하였습니다.",
                    data: {
                        findPosting
                    }
                });
            } else {
                return findPosting
            }
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "게시글을 조회할 수 없습니다."
            });
        }
    },
    
    /** 과제 6. 특정 게시글 수정 */
    async patchPostingById(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                posting_id,
                userId,
                // userName,     // 테이블 조인 필요
                title,
                content,         // <br> 처리 유무?
                // attachementId
            } = req.body;
            
            const updatePostingInfo = {
                posting_id,
                userId,
                title,
                content,
                // attachementId       // 값이 없다면 null, 값이 있다면 file Table 에서 자동 생성된 id 값으로 받는다?
            };

            const updatePosting = await postingService.getPostingById(updatePostingInfo.posting_id);
            if (!updatePosting) {
                return res.status(400).json({
                    message: "수정할 게시글이 조회되지 않습니다.",     // 다른 에러는 어떻게 표시? controller 단에서 표현?
                    data: {
                        updatePosting
                    }
                });
            } else {
                return res.status(200).json({
                    message: "게시글이 수정되었습니다.",
                    data: {
                        updatePosting
                    }
                });
            }
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "게시글 수정에 실패하였습니다."
            });
        }
    },

    /** 과제 7. 특정 게시글 삭제 */
    async deletePostingById(req: Request, res: Response, next: NextFunction) {
        try {
            // 과제7 조건 : 게시글을 삭제할 수 있는 사용자는 게시글 작성자만이어야 합니다.
            const {
                posting_id,
                userId,     // token 으로 구현시 middleware 에서 처리!
            } = req.body;
            
            const deletePostingInfo = {
                posting_id,
                userId
            };

            const deletedPosting = await postingService.getPostingById(deletePostingInfo.posting_id);
            if (!deletedPosting) {
                return res.status(400).json({
                    message: "삭제할 게시글이 조회되지 않습니다.",
                    data: {
                        deletedPosting
                    }
                });
            } else {
                return res.status(200).json({
                    message: "게시글이 삭제되었습니다.",
                    data: {
                        deletedPosting
                    }
                });
            }
        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: "게시글 삭제에 실패하였습니다."
            });
        }
    },

}

export default postingController;