import { openai } from "../config/openAI.js";
import dotenv from "dotenv";
dotenv.config();

export const generateChatResponse = async (message) => {
    
  const response = await openai.responses.create({
    model: process.env.DEPLOYMENT_NAME,
    input: [
      {
        role: "system",
        content: "You are a helpful assistant",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  return response.output_text;
};
