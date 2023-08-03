require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
// const { swaggerUi, specs } = require("./config/swagger");
const cookieParser = require("cookie-parser");

/** Database */
const mysql = require('mysql2');

/** Router */
const indexRouter = require('./src/routes/indexRouter.js')

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});