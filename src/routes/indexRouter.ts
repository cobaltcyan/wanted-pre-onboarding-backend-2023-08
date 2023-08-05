// const express = require('express');
// const router = express.Router();
// const database = require('../config/database.js');

import express from 'express';
import database from '../config/database';
const router = express.Router();

// const userRouter = require('./userRouter');
// const communityRouter = require('./communityRouter');
import userRouter from './userRouter';
import communityRouter from './communityRouter';

router.get('/', function(req, res, next) {
    const sql = 'SELECT * FROM TEST'; // 예시: memos 테이블에서 모든 데이터를 가져오는 쿼리
    
    database.connection.query(sql, (err, rows) => {
      if (err) {
        console.error('쿼리 실행 에러:', err.stack);
        return res.status(500).send('Internal Server Error');
      }
      
      // 가져온 데이터를 index 템플릿에 전달하여 렌더링
      // res.render('../src/index', { rows: rows });
      res.render('index', { rows: rows });

    });
});

router.get('/api/user', userRouter);
router.get('/api/community', communityRouter);

// module.exports = router;
// export default indexRouter; //오류나네
export default router; 