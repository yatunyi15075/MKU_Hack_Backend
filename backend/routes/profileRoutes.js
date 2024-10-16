// routes/profileRoutes.js
import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';

const router = Router();

router.get('/:studentId', getProfile);
router.put('/:studentId', updateProfile);

export default router;
