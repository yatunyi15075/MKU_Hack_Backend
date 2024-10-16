// routes/assignmentRoutes.js
import { Router } from 'express';
import { getAssignments, createAssignment } from '../controllers/assignmentController.js';

const router = Router();

router.get('/', getAssignments);
router.post('/', createAssignment);

export default router;
