import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import UserDto from '../../dto/UserDto';
import User from '../../domain/User';
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY!;
const tokenExpirationTime = process.env.JWT_EXPIRATION_TIME!;
const refreshTokenSecretKey = process.env.JWT_REFRESH_TOKEN_SECRET_KEY!;
const issuer = process.env.JWT_ISSUER!;
const audience = process.env.AUDIENCE!;

const jwtUtil = {
    
  generateAccessToken(user: UserDto) {
    
    const payload = {
      email: user.email
    };

    const token = jwt.sign(payload, secretKey, {
      expiresIn: tokenExpirationTime,
      issuer: issuer,
      audience: audience,
    });

    return token;
  },

  async validateToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      const accessToken = token ? token.replace('Bearer ', '') : '';
      const decoded = jwt.verify(accessToken, secretKey);
      console.log(decoded);

    } catch {

    }
  }

}

export default jwtUtil;
