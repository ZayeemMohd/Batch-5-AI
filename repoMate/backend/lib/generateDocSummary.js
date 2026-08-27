import {GoogleGenAI} from "@google/genai";
import dotenv from "dotenv"

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY_1
})

export default async function generateDocSummary(doc){
    console.log("Generating summary...")

    const code = doc.pageContent.slice(0, 10000); // Limit to 10000 characters

    let systemPrompt = [
    `You are an intelligent senior software engineer who specialises in onboarding junior software engineers onto projects`,
    `You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file
Here is the code:
---
${code}
---
            Give a summary no more than 100 words of the code above and don't add any boiler plate or extra information like greeting. Just summarise the code in a concise manner. I am going to use your summary to generate embeddings and perform RAG of this summary. Remember: don't add any boiler plate or extra information.`,
  ];

    const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: systemPrompt
    })

    console.log("Summary Generated for: ", doc.metadata.source);

    return response.text
}

// let result = await generateDocSummary({
//     pageContent: "const express = require('express');\n" +
//       "const bcrypt = require('bcrypt');\n" +
//       "const jwt = require('jsonwebtoken');\n" +
//       "const { validateUser } = require('./utils');\n" +
//       '\n' +
//       'const router = express.Router();\n' +
//       '\n' +
//       "router.post('/register', async (req, res) => {\n" +
//       '\n' +
//       '});\n' +
//       '\n' +
//       "router.post('/login', async (req, res) => {\n" +
//       '\n' +
//       '});\n' +
//       '\n' +
//       'module.exports = router;\n',
//     metadata: {
//       source: 'auth.js',
//       repository: 'https://github.com/ZayeemMohd/taskflowAI',
//       branch: 'main'
//     },
//     id: undefined
//   })
// console.log(result)