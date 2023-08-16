import Posting from '../domain/Posting';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const postingRepository = {
    
    async createPosting(newPosting: Posting): Promise<Posting> {
        try {
            const newPosts = await prisma.posting.create({
                data: {
                    // "id": newPosting.id,
                    "userId": newPosting.userId,
                    "title": newPosting.title,
                    "content": newPosting.content,
                    "createdAt": newPosting.createdAt,
                    "createdId": newPosting.createdId,
                }
            });
            return newPosts;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },
    
    async findPostingById(posting_id: bigint): Promise<any> {
        try {
            const findPosting = await prisma.posting.findUnique({
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
            const findPosting = await prisma.posting.findMany({
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
            // const updatedPosting = await prisma.posting.update({
            //     where: {
            //         "userId": updatePostingInfo.userId,
            //         // "title": updatePostingInfo.title,
            //         // "content": updatePostingInfo.content,
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
    async deletePosting(posting_id: bigint, userId: bigint): Promise<any> {
        try {
            const deletedPosting = await prisma.posting.delete({
                where: {
                    "id": Number(posting_id),
                    "userId": userId,
                }
            });
            return deletedPosting;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

}

export default postingRepository;