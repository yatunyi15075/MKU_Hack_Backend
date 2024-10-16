// controllers/progressController.js
import Progress from '../models/progress.js';

export const getStudentProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll({ where: { StudentId: req.params.studentId } });
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProgress = async (req, res) => {
  const { completionPercentage } = req.body;
  try {
    const progress = await Progress.update({ completionPercentage }, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Progress updated', progress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
