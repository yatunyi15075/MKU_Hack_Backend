// models/progress.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './student.js';
import Course from './course.js';

const Progress = sequelize.define('Progress', {
  completionPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // 0 to 100%
  },
});

// Relationship: Progress belongs to a student and a course
Progress.belongsTo(Student);
Progress.belongsTo(Course);

export default Progress;
