import express from 'express';
import database from '../config/database';
import userRouter from './userRouter';
import postingRouter from './postingRouter';
const router = express.Router();

// router.get('/', function(req, res, next) {
//     const sql = 'SELECT * FROM User';
    
//     database.connection.query(sql, (err, rows) => {
//       if (err) {
//         console.error('쿼리 실행 에러:', err.stack);
//         return res.status(500).send('Invalid Server Error');
//       }
//       res.json({
//         data: rows
//       });

//     });
// });


router.use('/api/user', userRouter);        // 과제1, 과제2
router.use('/api/posting', postingRouter);  // 과제3, 과제4, 과제5, 과제6

export default router; 