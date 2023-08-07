// const userRepository = require('../repositories/userRepository');
import userRepository from '../repositories/userRepository';
import * as passwordUtil from '../utils/encrypt/passwordUtil';

const userService = {

    async postSignup(newUserInfo: any) {
        try {
            const newUser = await userRepository.createUser(newUserInfo);
            if (newUser) {
                return {
                    user_id: newUser.id,
                    userName: newUser.userName,
                    email: newUser.email,
                    intro: newUser.intro,
                    phoneNumber: newUser.phoneNumber
                }
            }
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },

    async postSignin(sigininUserInfo: any) {
        try {

            // 비밀번호 암호화
            const hashedPassword = await passwordUtil.hashPassword(sigininUserInfo.password);

            const userEmail = sigininUserInfo.email;
            const userPassword = await passwordUtil.comparePassword(sigininUserInfo.password, hashedPassword);


            const findUser = await userRepository.findUserByEmail(userEmail);

            // to-do: JWT 토큰 생성 
            const payload = {
                user_id: findUser.id
            }

            // to-do: access Token, refresh Token(redis 활용)


        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }   
    },

    async getUserById(user_id: bigint) {
        try {
            const findUser = await userRepository.findUserById(user_id);
            // return findUser;
            if (findUser) {
                return {
                    user_id: findUser.id,
                    userName: findUser.userName,
                    email: findUser.email,
                    intro: findUser.intro,
                    phoneNumber: findUser.phoneNumber,
                }
            }
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },

    async getUserByEmail(email: string) {
        try {
            const findUser = await userRepository.findUserByEmail(email);
            // return findUser;
            if (findUser) {
                return {
                    user_id: findUser.id,
                    userName: findUser.userName,
                    email: findUser.email,
                    intro: findUser.intro,
                    phoneNumber: findUser.phoneNumber,
                }
            } else {
                return {
                    status: "400",
                    message: "일치하는 사용자가 없습니다."
                }
            }
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },


}

// module.exports = userService;
export default userService;
