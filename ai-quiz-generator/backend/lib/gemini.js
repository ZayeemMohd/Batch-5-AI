import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// generateQuiz("reactjs")

export const generateQuiz = async (topic) => {
  const systemPrompt =
    "Hey Gemini, Act as a expert quiz generator who is expert in generating quizes and taking examinations, I am build a AI powered quiz generator full stack application, for that generate me an array of 2  quizzes related to " +
    topic +
    " in the given format { 'question': 'how many months in a year', 'option1': '10', 'option2': '12', 'option3': '8', 'option4': '6', 'correctOption': 'option2' }. don't add any boiler plate text like ```json, send directly array of objects. I am using your response to directly convert into javascript object using 'JSON.parse' so send reponse accordingly.";

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: systemPrompt,
  });

  const quizArr = JSON.parse(response.text)

  console.log("data from ai ------", quizArr)

  return quizArr
  // return JSON.parse(response.text);
};


// generateQuiz("mongodb")