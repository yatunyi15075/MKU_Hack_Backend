// models/notification.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './student.js';

const Notification = sequelize.define('Notification', {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Relationship: Notification belongs to a student
Notification.belongsTo(Student);

export default Notification;
