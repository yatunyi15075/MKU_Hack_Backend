// routes/progressRoutes.js
import { Router } from 'express';
import { getStudentProgress, updateProgress } from '../controllers/progressController.js';

const router = Router();

router.get('/:studentId', getStudentProgress);
router.put('/:id', updateProgress);

export default router;
