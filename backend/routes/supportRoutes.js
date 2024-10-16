// routes/supportRoutes.js
import { Router } from 'express';
import { createSupportRequest, getSupportRequests } from '../controllers/supportController.js';

const router = Router();

router.post('/', createSupportRequest);
router.get('/:studentId', getSupportRequests);

export default router;
