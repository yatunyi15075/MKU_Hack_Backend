// controllers/notificationController.js
import Notification from '../models/notification.js';

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({ where: { StudentId: req.params.studentId } });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.update({ isRead: true }, { where: { id: req.params.id } });
    res.status(200).json({ message: 'Notification marked as read', notification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
