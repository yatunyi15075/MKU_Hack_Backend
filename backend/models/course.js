// models/course.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Course = sequelize.define('Course', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Course;
