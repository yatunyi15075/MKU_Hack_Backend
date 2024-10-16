// models/support.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './student.js';

const Support = sequelize.define('Support', {
  issueType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending', // Pending, Resolved
  },
});

// Relationship: Support belongs to a student
Support.belongsTo(Student);

export default Support;
