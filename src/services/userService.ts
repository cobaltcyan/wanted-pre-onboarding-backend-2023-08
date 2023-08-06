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
    }


}

// module.exports = userService;
export default userService;
