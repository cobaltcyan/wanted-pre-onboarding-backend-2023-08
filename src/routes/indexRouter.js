const express = require('express');
const router = express.Router();
const database = require('../config/database.js');

const userRouter = require('./userRouter');
const communityRouter = require('./communityRouter');

router.get('/', function(req, res, next) {
    const sql = 'SELECT * FROM TEST'; // 예시: memos 테이블에서 모든 데이터를 가져오는 쿼리
    
    database.connection.query(sql, (err, rows) => {
      if (err) {
        console.error('쿼리 실행 에러:', err.stack);
        return res.status(500).send('Internal Server Error');
      }
      
      // 가져온 데이터를 index 템플릿에 전달하여 렌더링
      res.render('index', { rows: rows });
    });
});




module.exports = router;