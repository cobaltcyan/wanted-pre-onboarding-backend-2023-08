import communityRepository from '../repositories/postingRepository';

const communityService = {

    async postNewPosting(newPostingInfo: any) {
        try {
            const newPosting = await communityRepository.createPosting(newPostingInfo);
            if (newPosting) {
                return {
                    posting_id: newPosting.id,
                    userId: newPosting.userId,
                    userName: newPosting.userName,     // 테이블 조인 필요
                    title: newPosting.title,
                    content: newPosting.content,
                    // attachementId: newPosting.attachementId,
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async getPostingById(posting_id: bigint) {
        try {
            const findPosting = await communityRepository.findPostingById(posting_id);
            if (findPosting) {
                return {
                    posting_id: findPosting.id,
                    userId: findPosting.userId,
                    userName: findPosting.userName,     // 테이블 조인 필요
                    title: findPosting.title,
                    content: findPosting.content,
                    // attachementId: findPosting.attachementId,
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async getPostingAll() {
        try {
            const findPostings = await communityRepository.findPostingAll();
            if (findPostings) {
                // to-do: 페이지네이션 구현 필수!
                return {
                    posting_id: findPostings.id,
                    userId: findPostings.userId,
                    userName: findPostings.userName,     // 테이블 조인 필요
                    title: findPostings.title,
                    content: findPostings.content,
                    // attachementId: findPostings.attachementId,
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
    
    async deletePostingById(posting_id: bigint) {
        try {
            // fintPostingId 검사

            // 삭제Posting 삭제
            const deletedPosting = await communityRepository.deletePosting(posting_id);
            if (deletedPosting) {
                return {
                    // data: {
                        posting_id: deletedPosting.id,
                        userId: deletedPosting.userId,
                        userName: deletedPosting.userName,     // 테이블 조인 필요
                        title: deletedPosting.title,
                        content: deletedPosting.content,
                        // attachementId: deletedPosting.content,
                    // }
                }
            }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
}

export default communityService;