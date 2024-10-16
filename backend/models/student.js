// models/student.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcryptjs';

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0,  // Progress percentage
  },
});

// Hash password before saving
Student.beforeCreate(async (student) => {
  const salt = await bcrypt.genSalt(10);
  student.password = await bcrypt.hash(student.password, salt);
});

export default Student;

