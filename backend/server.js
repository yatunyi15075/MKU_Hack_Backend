// server.js
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js'; // Import the database config
import studentRoutes from './routes/studentRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import supportRoutes from './routes/supportRoutes.js';
import progressRoutes from './routes/progressRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/notifications', notificationRoutes);

// Connect to database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    // Sync models if needed
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
};

connectToDatabase();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
