// controllers/studentController.js
import Student from '../models/student.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

export const registerStudent = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingStudent = await Student.findOne({ where: { email } });
    if (existingStudent) return res.status(400).json({ message: 'Email already in use' });

    const student = await Student.create({ name, email, password });

    const token = jwt.sign({ id: student.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginStudent = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ where: { email } });
    if (!student) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: student.id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
