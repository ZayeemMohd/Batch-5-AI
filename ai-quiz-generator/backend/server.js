import express from "express";
import { generateQuiz } from "./lib/gemini.js";

const app = express();

app.get("/quiz/:topic", async (req, res) => {
  const { topic } = req.params;

  console.log("topic received from client ----------", topic);

  const quizArr = await generateQuiz(topic);

  console.log("quiz generated successfully:: ", quizArr);

  res.json({
    msg: "quiz generated successfully",
    data: quizArr,
  });
});

app.listen("8080", () => {
  console.log("server is listening on port: 8080");
});
