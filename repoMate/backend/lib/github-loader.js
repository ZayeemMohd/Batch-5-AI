import { GithubRepoLoader } from "@langchain/community/document_loaders/web/github";


export default async function loadGithubRepo(githubURL, githubToken) {
   const loader = new GithubRepoLoader(githubURL)

   const docsArray = await loader.load();

   console.log(docsArray)
}


// loadGithubRepo("https://github.com/ZayeemMohd/small-test")
loadGithubRepo("https://github.com/ZayeemMohd/taskflowAI")