// controllers/ttsController.js
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';

const client = new textToSpeech.TextToSpeechClient();

export const convertTextToSpeech = async (req, res) => {
  const { text } = req.body;

  const request = {
    input: { text: text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    res.status(200).send('Text converted to speech and saved as output.mp3');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
