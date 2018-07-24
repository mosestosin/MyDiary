import express from 'express';
import Diary from '../controller/diaries';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200)
    .send({
      message: 'Welcome to MyDiary API',
    });
});

router.get('/entries', Diary.getDiary);
router.get('/entries/:id', Diary.getSpecificDiary);
router.post('/entries', Diary.createDiary);

// router.put('/entries/:id', Diary.updateDiary);

export default router;
