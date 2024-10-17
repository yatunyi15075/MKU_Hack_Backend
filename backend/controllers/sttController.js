// controllers/sttController.js
import speech from '@google-cloud/speech';
import fs from 'fs';

const client = new speech.SpeechClient();

export const convertSpeechToText = async (req, res) => {
  const audioFile = req.file.path; // Assume audio is uploaded as a file

  const audio = {
    content: fs.readFileSync(audioFile).toString('base64'),
  };

  const request = {
    audio: audio,
    config: {
      encoding: 'MP3',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results.map(result => result.alternatives[0].transcript).join('\n');
    res.status(200).json({ transcription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
