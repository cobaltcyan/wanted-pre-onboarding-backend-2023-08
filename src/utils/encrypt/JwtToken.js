require('dotenv').config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY;
const tokenExpirationTime = process.env.JWT_EXPIRATION_TIME;
const refreshTokenSecretKey = process.env.JWT_REFRESH_TOKEN_SECRET_KEY;
const issuer = process.env.JWT_ISSUER;
const audience = process.env.AUDIENCE;