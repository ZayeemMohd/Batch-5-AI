import express from "express";
import { main } from "./index.js";

const app = express();

app.get("/summarisecommit", async (req, res) => {
  const { githubURL } = req.query;
  console.log("github url from client:: ", githubURL);

  const data = await main(githubURL);

  res.json({
    msg: "Get request recieved",
    data,
  });
});

app.listen("8080", () => {
  console.log("server is listening on port 8080");
});
