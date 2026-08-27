import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY_2
})


export default async function embedSummary(docSummary){
    console.log("Generating embedding...");

    const docEmbedding = await ai.models.embedContent({
        model: "gemini-embedding-2",
        contents: docSummary
    })

    return docEmbedding.embeddings[0].values
}


// console.log(await embedSummary("This module defines an Express router responsible for handling user authentication endpoints. It imports `bcrypt` for password hashing,`jsonwebtoken` for issuing JWT tokens, and a custom `validateUser` utility for input validation. The file sets up skeleton route handlers for two HTTP POST endpoints: `/register` for creating new user accounts and `/login` for authenticating existing users. Finally, it exports the configured Express router to be mounted in the main application."))