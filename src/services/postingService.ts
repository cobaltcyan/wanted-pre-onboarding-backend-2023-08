import PostingCreateDto from '../dto/PostingCreateDto';
import Posting from '../domain/Posting';
import postingRepository from '../repositories/postingRepository';

const postingService = {

    async postNewPosting(newPostingInfo: PostingCreateDto): Promise<any> {
        try {
            const newPosting = new Posting(
                null,
                newPostingInfo.userId,
                newPostingInfo.title,
                newPostingInfo.content,
                false,
                new Date(),
                newPostingInfo.createdId,
                null,
                null
            );

            const newPosts = await postingRepository.createPosting(newPosting);
            if (newPosts) {
                return {
                    posting_id: newPosts.id,
                    userId: newPosts.userId,
                    title: newPosts.title,
                    content: newPosts.content,
                    createdAt: newPosts.createdAt,
                    createdId: newPosts.createdId
                }
                // return new PostingCreateDto(newPosting);
            }
            return newPosts;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async getPostingById(posting_id: bigint): Promise<any> {
        try {
            const findPosting = await postingRepository.findPostingById(posting_id);
            if (findPosting) {
                return {
                    posting_id: findPosting.id,
                    userId: findPosting.userId,
                    // userName: findPosting.userName,     // 테이블 조인 필요
                    title: findPosting.title,
                    content: findPosting.content,
                    createdAt: findPosting.createdAt,
                    createdId: findPosting.createdId
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async getPostingAll() {
        try {
            const findPostings = await postingRepository.findPostingAll();
            if (findPostings) {
                // to-do: 페이지네이션 구현 필수!
                return {
                    posting_id: findPostings.id,
                    userId: findPostings.userId,
                    userName: findPostings.userName,     // 테이블 조인 필요
                    title: findPostings.title,
                    content: findPostings.content
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async patchPostingById(posting_id: bigint) {
        try {
            // to-do: id 가 있는지부터 검사...

            // const updatedPosting = await communityRepository.updatePosting(posting_id);
            // if (updatedPosting) {
            //     return {
            //         posting_id: updatedPosting.id,
            //         userId: updatedPosting.userId,
            //         userName: updatedPosting.userName,     // 테이블 조인 필요
            //         title: updatedPosting.title,
            //         content: updatedPosting.content,
            //         // attachementId: updatedPosting.attachementId,
            //         updatedAt: updatedPosting.updatedAt,  
            //         // updatedId: updatedPosting.updatedId,
            //     }
            // }
            console.log('patchPostingById');
            
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
    async deletePostingById(posting_id: bigint, userId: bigint) {
        try {

            // fintPostingId 검사
            const findPosting = await postingRepository.findPostingById(posting_id);
            if(!findPosting) {
                throw new Error("삭제할 게시물이 없습니다");
            }

            if (findPosting.userId !== userId ) {
                throw new Error("삭제할 권한이 없습니다");
            }
            
            // 삭제Posting 삭제
            const deletedPosting = await postingRepository.deletePosting(posting_id, userId);
            if (deletedPosting) {
                return {
                    // data: {
                        posting_id: deletedPosting.id,
                        userId: deletedPosting.userId
                    // }
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
}

export default postingService;