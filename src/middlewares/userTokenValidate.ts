import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY!;

interface TokenPayload {
    // userId: number;
    email: string;
}

interface ExtendedRequest extends Request {
    user?: TokenPayload;
}
  
const userTokenValidate = {

    // async validateToken(req: Request, res: Response, next: NextFunction) {
    async validateToken(req: ExtendedRequest, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization;
            const accessToken = token ? token.replace('Bearer ', '') : '';
            const decoded = jwt.verify(accessToken, secretKey) as TokenPayload;
            console.log(decoded);
            req.user = decoded;
            // user_id가 존재하지 않거나 user_id와 일치하지 않을 경우 에러 처리
            if (!decoded) {
                return res.status(401).json({
                    status: "401",
                    message: "Unauthorized token / 권한이 없습니다.",
                });
            }
        } catch (err: any) {
            if (err.name === 'JsonWebTokenError') {
                // 토큰이 유효하지 않은 경우
                return res.status(401).json({
                    status: "403",
                    message: "유효하지 않은 토큰입니다(Invalid token)."
                });
            } else if (err.name === 'TokenExpiredError') {
                // 토큰이 만료된 경우
                return res.status(401).json({
                    status: "404",
                    message: "만료된 토큰입니다(Expired token)."
                });
            } else {
                // 기타 토큰 검증 실패
                return res.status(500).json({
                    status: "500",
                    message: "Invalid error"
                });
            }
        }
    }
}

export default userTokenValidate;
