// controllers/aiAssistantController.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getAssistantResponse = async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `You are a helpful AI assistant. Respond to the following message: ${message}`,
      max_tokens: 100,
    });

    res.status(200).json({ response: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
