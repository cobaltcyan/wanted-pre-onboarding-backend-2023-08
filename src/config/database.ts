/** Database */
const mysql = require('mysql2');
// const mysql = require('mysql');

// MySQL 연결 정보 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
  });

// MySQL 서버에 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 에러:', err.stack);
    return;
  }
  console.log('MySQL 서버에 연결되었습니다!');
});