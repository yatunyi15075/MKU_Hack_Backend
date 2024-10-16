// controllers/supportController.js
import Support from '../models/support.js';

export const createSupportRequest = async (req, res) => {
  const { issueType, message, studentId } = req.body;
  try {
    const supportRequest = await Support.create({ issueType, message, StudentId: studentId });
    res.status(201).json(supportRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSupportRequests = async (req, res) => {
  try {
    const supportRequests = await Support.findAll({ where: { StudentId: req.params.studentId } });
    res.status(200).json(supportRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
