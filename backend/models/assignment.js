// models/assignment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './student.js';
import Course from './course.js';

const Assignment = sequelize.define('Assignment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Pending', // Can be 'Pending', 'Submitted', etc.
  },
});

// Define relationships
Assignment.belongsTo(Student);
Assignment.belongsTo(Course);

export default Assignment;
