// routes/notificationRoutes.js
import { Router } from 'express';
import { getNotifications, markAsRead } from '../controllers/notificationController.js';

const router = Router();

router.get('/:studentId', getNotifications);
router.put('/:id', markAsRead);

export default router;
