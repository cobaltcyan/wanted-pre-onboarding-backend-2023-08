require('dotenv').config();
const mysql = require('mysql');

// MySQL 연결 정보 설정
const connection = mysql.createConnection({
    host: process.env.DB_HOST, // MySQL 서버 호스트
    user: process.env.DB_USER, // MySQL 사용자 이름
    password: process.env.DB_PASSWORD, // MySQL 비밀번호
    database: process.env.DB_DATABASE, // 사용할 데이터베이스 이름
    port: process.env.DB_PORT // 사용할 데이터베이스 이름
  });


// MySQL 서버에 연결
connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 에러:', err.stack);
    return;
  }
  console.log('MySQL 서버에 연결되었습니다!');
});