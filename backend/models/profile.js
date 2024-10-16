// models/profile.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './student.js';

const Profile = sequelize.define('Profile', {
  themePreference: {
    type: DataTypes.STRING,
    defaultValue: 'light', // light or dark mode
  },
  fontSize: {
    type: DataTypes.INTEGER,
    defaultValue: 14, // Default font size
  },
  colorBlindMode: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // Accessibility feature
  },
});

// Relationship: Profile belongs to a student
Profile.belongsTo(Student);

export default Profile;
