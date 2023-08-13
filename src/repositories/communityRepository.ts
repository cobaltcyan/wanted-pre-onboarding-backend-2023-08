import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const communityRepository = {
    
    async createPosting(newPostingInfo: any): Promise<any> {
        try {
            const newPosting = await prisma.community.create({
                data: {
                    "userId": newPostingInfo.userId,
                    "title": newPostingInfo.title,
                    "content": newPostingInfo.content,
                    // "attachmentId":  newPostingInfo.attachmentId || null,
                    "createdAt": new Date(),  
                    // "createdId": newPostingInfo.userId,
                }
            });
            return newPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
    async findPostingById(posting_id: bigint): Promise<any> {
        try {
            const findPosting = await prisma.community.findUnique({
                where: {
                    "id": Number(posting_id),
                    "hidden": false             // soft delete 구현할 경우
                }
            });
            return findPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
    async findPostingAll(): Promise<any> {
        try {
            const findPosting = await prisma.community.findMany({
                where: {
                    "hidden": false             // soft delete 구현할 경우
                }
            });
            return findPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async updatePosting(updatePostingInfo: any): Promise<any> {
        try {
            // const updatedPosting = await prisma.community.update({
            //     where: {
            //         "userId": updatePostingInfo.userId,
            //         // "title": updatePostingInfo.title,
            //         // "content": updatePostingInfo.content,
            //         // "attachmentId":  updatePostingInfo.attachmentId || null,
            //         // "updatedAt": new Date(),  
            //         // "updatedId": updatePostingInfo.userId,
            //     }
            // });
            // return updatedPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    /** hard delete */
    async deletePosting(posting_id: bigint): Promise<any> {
        try {
            const deletedPosting = await prisma.community.delete({
                where: {
                    "id": Number(posting_id)
                    // "userId": deletePostingInfo.userId,
                    // "title": deletePostingInfo.title,
                    // "content": deletePostingInfo.content,
                    // "attachmentId":  deletePostingInfo.attachmentId || null,
                    // "deletedAt": new Date(),  
                    // "deletedId": deletePostingInfo.userId,
                }
            });
            return deletedPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

}

export default communityRepository;