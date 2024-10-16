// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const protect = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
