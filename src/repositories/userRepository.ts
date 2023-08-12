// const User = require('../domain/user');
import User from '../domain/User';

// import { PrismaClient } from '@prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userRepository = {

    async createUser(newUser: User): Promise<User> {
        try {
            const createdUser = await prisma.user.create({
                data: {
                    email: newUser.email,
                    password: newUser.password,
                    nickname: newUser.nickname,
                    userName: newUser.userName,
                    phoneNumber: newUser.phoneNumber,
                    intro: newUser.intro,
                    adminYn: newUser.adminYn,
                    createdAt: newUser.createdAt,
                    // createdId: newUser.createdId,
                    // createdId: newUser.createdId.toString(),
                    updatedAt: newUser.updatedAt,
                    // updatedId: newUser.updatedId,
                    deletedAt: newUser.deletedAt,
                    // deletedId: newUser.deletedId,
                },
            });
            return createdUser;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    // async createUser(newUserInfo: User): Promise<User> {
    //     try {
    //         const newUser = await prisma.user.create({
    //             data: {
    //                 "email": newUserInfo.email,
    //                 "password": newUserInfo.password,
    //                 // "nickname": newUserInfo.nickname,
    //                 // "userName": newUserInfo.userName,z
    //                 // "phoneNumber": newUserInfo.phoneNumber,
    //                 // "intro": newUserInfo.intro,
    //             }
    //         });
    //         return newUser;
    //     } catch(err) {
    //         console.error(err);
    //         throw new Error('Invalid Error');
    //     }
    // },

    async findUserById(user_id: bigint) {
        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    "id": Number(user_id)
                }
            });
            return findUser;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async findUserByEmail(email: string) {
        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    "email": email
                }
            });
            return findUser;
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

}

// module.exports = userRepository;
export default userRepository;
