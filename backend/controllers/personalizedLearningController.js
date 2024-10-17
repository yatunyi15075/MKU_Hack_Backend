import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getPersonalizedLearning = async (req, res) => {
  const { studentQuestion } = req.body;

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Provide personalized learning guidance for this student query: ${studentQuestion}`,
      max_tokens: 150,
    });

    res.status(200).json({ response: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
