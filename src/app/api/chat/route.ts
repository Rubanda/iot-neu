import { generateText, streamText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  compatibility: "strict"
})

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result=  streamText({
      model: openai('gpt-4o-mini'),
      system: `you are a experience doctor expert in skin 
      care and dermatology and you are talking to a patient 
      who is asking about skin care tips and experience with skin conditions like monkeypox and eczema`,
      messages: [
       ...messages
      ],
      temperature: 1,
  });
  // return response.text;
  return result.toDataStreamResponse();
}