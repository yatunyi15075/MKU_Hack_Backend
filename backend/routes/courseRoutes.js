// routes/courseRoutes.js
import { Router } from 'express';
import { getCourses, createCourse } from '../controllers/courseController.js';

const router = Router();

router.get('/', getCourses);
router.post('/', createCourse);

export default router;
