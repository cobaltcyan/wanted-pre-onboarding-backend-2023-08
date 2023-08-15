import express from 'express';
import database from '../config/database';
import userRouter from './userRouter';
import postingRouter from './postingRouter';
const router = express.Router();

router.get('/', function(req, res, next) {
    const sql = 'SELECT * FROM User'; // 예시: memos 테이블에서 모든 데이터를 가져오는 쿼리
    
    database.connection.query(sql, (err, rows) => {
      if (err) {
        console.error('쿼리 실행 에러:', err.stack);
        return res.status(500).send('Invalid Server Error');
      }
      
      // 가져온 데이터를 index 템플릿에 전달하여 렌더링
      // res.render('../src/index', { rows: rows });
      // res.render('index', { rows: rows });

      res.json({
        data: rows
      });

    });
});

router.use('/api/user', userRouter);
router.use('/api/posting', postingRouter);

export default router; 