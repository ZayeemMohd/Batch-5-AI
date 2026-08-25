import express from "express"
import indexRepo from "./lib/indexRepo";


const app = express();
app.use(express.json())


app.post("/add-repo", (req, res)=>{
    const {githubURL, githubToken} = req.body;


    indexRepo(githubURL, githubToken)

    res.json({
        message: "Repo indexed successfully"
    })
})


app.post('/ask-question', (req, res)=>{
    const {userQuery} = req.body;


    res.json({
        message: "query answer generated successfully"
    })
})

app.listen("8080", ()=>{
    console.log("Server is listening on port 8080")
})