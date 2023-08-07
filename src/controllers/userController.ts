import { Request, Response, NextFunction } from 'express';
// const userService = require('../services/userService');
import userService from '../services/userService';
import * as emailUtil from '../utils/emailUtil';
import * as passwordUtil from '../utils/encrypt/passwordUtil';
import UserDto from '../dto/UserDto';

const userController = {

    /** 과제1. 회원가입 */
    async postSignup(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                email,
                password,
                passwordCheck
            } = req.body;

            // 중복 회원 검사
            const findUser = await userService.getUserByEmail(email);
            if (findUser) {
                return res.status(400).json({
                    status: "400",
                    message: "기존에 가입되어 있는 회원입니다.",
                    data: {
                        user_id: findUser.user_id,
                        email: findUser.email
                    }
                });
            }
            
            // 과제1 상세. 회원가입 로직 구현 (이메일, 비밀번호로 회원가입)

            // 이메일 유효성 검사 - '@' 포함
            const validEmail = emailUtil.isValidateEmail(email);
            if (!validEmail) {
                return res.status(404).json({
                    status: "404",
                    message: "유효하지 않은 이메일 형식입니다."
                });            
            }

            // 비밀번호 및 비밀번호확인 값 검사
            const comparedPassword = await passwordUtil.comparePassword(password, passwordCheck); 
            if (comparedPassword) {
                return res.status(400).json({
                    status: "404",
                    message: "비밀번호가 일치하지 않습니다."
                });
            }

            // 비밀번호 유효성 검사 - 8자이상, 반드시 암호화
            const checkedPassword = await passwordUtil.checkLengthPassword(password);
            if (!checkedPassword) {
                return res.status(404).json({
                    status: "400",
                    message: checkedPassword
                }); 
            }

            // 비밀번호 암호화
            const hashedPassword = await passwordUtil.hashPassword(password);

            const newUserInfo = {
                email,
                password: hashedPassword
            };

            const newUser = await userService.postSignup(newUserInfo);
            return res.status(200).json(newUser);

        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Invalid Error"
            });
        }
    },

    /** 과제2. 로그인 */
    async postSignin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;

            // 입력값 검사
            if (email === "" || password === "") {
                return res.status(404).json({
                    message: "정보를 모두 입력하세요."
                });
            }
          
            // 이메일 유효성 검사 - '@' 포함
            const validEmail = emailUtil.isValidateEmail(email);
            if (!validEmail) {
                return res.status(404).json({
                    status: "404",
                    message: "유효하지 않은 이메일 형식입니다."
                });            
            }

            const findUser = userService.getUserByEmail(email);
            if (!findUser) {
                return res.status(400).json({
                    message: "일치하는 이메일이 없습니다."
                })
            }

            const signinUserInfo = {
                email,
                password
            }
            const signinUser = await userService.postSignin(signinUserInfo);
            if(signinUser) {
                return res.status(200).json({
                    message: "로그인에 성공하였습니다.",
                    data: signinUser
                });
            } else {
                return signinUser;
            }
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