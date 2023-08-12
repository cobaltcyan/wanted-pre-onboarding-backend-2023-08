// const User = require('../domain/user');
import User from '../domain/User';
import UserDto from '../dto/UserDto';

// import { PrismaClient } from '@prisma/client';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const userRepository = {

    async createUser(newUserInfo: User): Promise<UserDto> {
        try {
            const newUser = await prisma.user.create({
                data: {
                    "email": newUserInfo.email,
                    "password": newUserInfo.password,
                    // "nickname": newUserInfo.nickname,
                    // "userName": newUserInfo.userName,
                    // "phoneNumber": newUserInfo.phoneNumber,
                    // "intro": newUserInfo.intro,
                }
            });
            return newUser;
        } catch(err) {
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
