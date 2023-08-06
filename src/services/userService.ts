// const userRepository = require('../repositories/userRepository');
import userRepository from '../repositories/userRepository';

const userService = {

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
            }
        } catch (err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },

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

}

// module.exports = userService;
export default userService;
