// controllers/profileController.js
import Profile from '../models/profile.js';

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ where: { StudentId: req.params.studentId } });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { themePreference, fontSize, colorBlindMode } = req.body;
  try {
    const profile = await Profile.update({ themePreference, fontSize, colorBlindMode }, { where: { StudentId: req.params.studentId } });
    res.status(200).json({ message: 'Profile updated', profile });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
