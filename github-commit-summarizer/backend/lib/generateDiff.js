export async function generateDiff(githubURL, commitHash){
   const reponse = await fetch(`${githubURL}/commit/${commitHash}.diff`)
   return reponse.text();
   
}