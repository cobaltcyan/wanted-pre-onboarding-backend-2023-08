import { Request, Response, NextFunction } from 'express';
// const userService = require('../services/userService');
import userService from '../services/userService';

const userController = {
    async postSignup(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('userController - postSignup');
            const { email } = req.body;
            const findUser = await userService.getUserByEmail(email);
            if (findUser) {
                return res.status(400).json({
                    resultCode: "400",
                    message: "기존에 가입되어 있는 회원입니다.",
                    data: {
                        user_id: findUser.user_id,
                        email: findUser.email
                    }
                });
            }
            
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Invalid Error"
            });
        }
    },

    async postSignin(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('userController - postSignin');
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Invalid Error"
            });
        }
    },


}

// module.exports = userController;
export default userController;