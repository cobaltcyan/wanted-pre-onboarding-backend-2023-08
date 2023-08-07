// const User = require('../domain/user');
// import User from '../domain/User';

// import { PrismaClient } from '@prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userRepository = {
    
    async createUser(newUserInfo: any) {
        try {
            const newUser = await prisma.user.create({
                data: {
                    "email": newUserInfo.email,
                    "password": newUserInfo.password,
                }
            });
            return newUser;
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

    async findUserById(user_id: bigint) {
        try {
            const findUser = await prisma.user.findUnique({
                where: {
                    "id": Number(user_id)
                }
            });
            return findUser;
        } catch (err) {
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
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }
    },

}

// module.exports = userRepository;
export default userRepository;
