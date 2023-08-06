import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
// import { swaggerUi, specs } from './src/config/swagger';
import swaggerRouter from './src/config/swagger';
import { PrismaClient } from '@prisma/client';

const app = express();
const indexPath = path.join(__dirname, '../pages');     // client side
const prisma = new PrismaClient();

/** Database */
// const mysql = require('mysql2');

/** Router */
import indexRouter from './src/routes/indexRouter'  
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', indexRouter);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs)); // Swagger 설정 추가
app.use('/api-docs', swaggerRouter); // Swagger 설정 추가

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
    console.log('indexPath:', indexPath);
});