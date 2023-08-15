import UserCreateDto from '../dto/UserCreateDto';
import UserDto from '../dto/UserDto';
import User from '../domain/User';
import userRepository from '../repositories/userRepository';
import * as passwordUtil from '../utils/encrypt/passwordUtil';

const userService = {

    async postSignup(newUserInfo: UserCreateDto): Promise<UserDto> {
        try {
            const newUser = new User(
                null,
                newUserInfo.email,
                '', // nickname
                '', // userName
                newUserInfo.password,
                '', // phoneNumber
                '', // intro
                'N', // adminYn
                new Date(),
                // newUser.id, // Assign newUser.id to createdId
                // '',
                new Date(),
                // null,
                new Date(),
                // null
            );
            
            const createdUser = await userRepository.createUser(newUser);
            return new UserDto(createdUser.email);
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },

    async postSignin(signinUserInfo: UserCreateDto): Promise<UserDto> {
        try {
            const { email, password } = signinUserInfo;

            // 비밀번호 암호화
            const hashedPassword = await passwordUtil.hashPassword(password);
            
            const findUser = await userRepository.findUserByEmail(email);
            if (!findUser) {
                throw new Error("일치하는 이메일이 없습니다.");
            }

            // 비밀번호 및 비밀번호확인 값 검사
            const comparePassword = await passwordUtil.comparePassword(password, findUser.password); 
            if (!comparePassword) {
                throw new Error("비밀번호가 일치하지 않습니다.");
            }

            // to-do: JWT 토큰 생성
            // const payload = {
            //     user_id: findUser.id
            // }

            // to-do: access Token, refresh Token(redis 활용)

            // 로그인 성공
            return new UserDto(findUser.email);
        } catch(err) {
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
                    user_id: Number(findUser.id),
                    userName: findUser.userName,
                    email: findUser.email,
                    intro: findUser.intro,
                    phoneNumber: findUser.phoneNumber,
                }
            }
        } catch(err) {
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
                    user_id: Number(findUser.id),
                    userName: findUser.userName,
                    email: findUser.email,
                    intro: findUser.intro,
                    phoneNumber: findUser.phoneNumber,
                }
            }
            //  else {
            //     return {
            //         status: "400",
            //         message: "일치하는 사용자가 없습니다."
            //     }
            // }
        } catch(err) {
            console.error(err);
            throw new Error('Invalid Error');
        }       
    },

}

export default userService;
