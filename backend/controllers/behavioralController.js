// controllers/behavioralController.js
import cv from 'opencv4nodejs';

const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);

export const trackEmotion = async (req, res) => {
  const { startCamera } = req.body;

  if (!startCamera) {
    return res.status(400).json({ message: 'Camera permission denied' });
  }

  try {
    const wCap = new cv.VideoCapture(0); // Open the default camera
    let frame = wCap.read();

    const detectFaces = classifier.detectMultiScale(frame.bgrToGray());
    const faces = detectFaces.objects;

    if (faces.length > 0) {
      // Dummy emotion detection logic (would use emotion detection models)
      const mood = 'sad'; // Assuming the system detects 'sad'

      if (mood === 'sad') {
        const response = 'I see you’re feeling down. Would you like to talk about it?';
        res.status(200).json({ mood, response });
      } else {
        res.status(200).json({ mood, response: 'You look great!' });
      }
    } else {
      res.status(404).json({ message: 'No face detected' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
