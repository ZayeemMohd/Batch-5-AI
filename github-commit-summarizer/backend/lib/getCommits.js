import { Octokit } from "octokit";

const octokit = new Octokit();

export async function getCommits(githubURL) {

  const [owner, repo] = githubURL.split("/").slice(-2);

  const { data } = await octokit.rest.repos.listCommits({
    owner: owner,
    repo: repo,
  });

  // console.log(data)
  return data;
}


// getCommits( 'https://github.com/ZayeemMohd/Batch-5-AI')