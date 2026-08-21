import express from "express";

const app = express();

app.get("/summarisecommit", (req, res) => {
    
  const { githubURL } = req.query;
  console.log("github url from client:: ", githubURL);

  res.json({
    msg: "Get request recieved",
  });
});

app.listen("8080", () => {
  console.log("server is listening on port 8080");
});
