import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// const { swaggerUi, specs } = require("./config/swagger");
const app = express();

/** Database */
// const mysql = require('mysql2');

/** Router */
import indexRouter from './src/routes/indexRouter'
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});