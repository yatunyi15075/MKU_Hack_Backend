// controllers/assignmentController.js
import Assignment from '../models/assignment.js';

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.findAll(); 
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
};

export const createAssignment = async (req, res) => {
  const { title, content, dueDate, studentId, courseId } = req.body;
  try {
    const assignment = await Assignment.create({ title, content, dueDate, StudentId: studentId, CourseId: courseId });
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
