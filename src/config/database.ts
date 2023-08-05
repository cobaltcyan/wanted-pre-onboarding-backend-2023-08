/** Database */
// const mysql = require('mysql2');
// const mysql = require('mysql');

// import mysql from 'mysql2';
import mysql, { Connection, ConnectionOptions, QueryError } from 'mysql2';

// MySQL 연결 정보 설정
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
});

// MySQL 서버에 연결
connection.connect((err: mysql.QueryError | null)  => {
  if (err) {
    console.error('MySQL 연결 에러:', err.stack);
    return;
  }
  console.log('MySQL 서버에 연결되었습니다!');
});

const database = {
  connection: connection
};

export default database;