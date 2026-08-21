import { Octokit } from "octokit";
import { generateDiff } from "./generateDiff.js";

const octokit = new Octokit();

export async function getCommits(githubURL) {

    // https://github.com/ZayeemMohd/Batch-5-AI

    const [owner, repo]=  githubURL.split("/").slice(-2)


  const { data } = await octokit.rest.repos.listCommits({
    owner: owner,
    repo: repo
  });


  console.log(data[0].sha)

  const diff = await generateDiff(githubURL, data[0].sha)

  console.log("-----dif generated------", diff)

//   return data; 
}


getCommits("https://github.com/ZayeemMohd/Batch-5-AI")