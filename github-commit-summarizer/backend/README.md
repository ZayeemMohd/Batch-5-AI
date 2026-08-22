

# Step 1: 
    - server.js > client provide GithubURL

# Step 2 (fetch commits using octokit): 
    - spliting owner and repo from GithubURL
    - fetch commits using owner and repo
    - result: array of commit objects 
    - each hash from each commit object

# Step 3 (fetch diff using hash):
    - fetching diff using "GithubURL" + "/commit/" + hash + ".diff
    - result: diff text

# Step 4 (generate summary using diff text):
    - Gemini: system prompt + diff text
    - result: summary of diff

# Step 5 (old commit object + final summary):



 // https://github.com/ZayeemMohd/Batch-5-AI


{
    sha: '07ce3316d657ca81b458f3b2d26e223d565085d7',
    node_id: 'C_kwDOT_n9hdoAKDA3Y2UzMzE2ZDY1N2NhODFiNDU4ZjNiMmQyNmUyMjNkNTY1MDg1ZDc',
    commit: {
      author: [Object],
      committer: [Object],
      message: 'AI quiz generator backend',
      tree: [Object],
      url: 'https://api.github.com/repos/ZayeemMohd/Batch-5-AI/git/commits/07ce3316d657ca81b458f3b2d26e223d565085d7',
      comment_count: 0,
      verification: [Object]
    },
    url: 'https://api.github.com/repos/ZayeemMohd/Batch-5-AI/commits/07ce3316d657ca81b458f3b2d26e223d565085d7',
    html_url: 'https://github.com/ZayeemMohd/Batch-5-AI/commit/07ce3316d657ca81b458f3b2d26e223d565085d7',
    comments_url: 'https://api.github.com/repos/ZayeemMohd/Batch-5-AI/commits/07ce3316d657ca81b458f3b2d26e223d565085d7/comments',
    author: null,
    committer: null,
    parents: []
  }


 [
  'diff --git a/frontend.js b/frontend.js\n' +
    'new file mode 100644\n' +
    'index 0000000..774a780\n' +
    '--- /dev/null\n' +
    '+++ b/frontend.js\n' +
    '@@ -0,0 +1 @@\n' +
    '+const pdfviewer = pdf();\n',
  'diff --git a/authentication b/authentication\n' +
    'new file mode 100644\n' +
    'index 0000000..b1179b1\n' +
    '--- /dev/null\n' +
    '+++ b/authentication\n' +
    '@@ -0,0 +1,3 @@\n' +
    '+//we do authentication here\n' +
    '+\n' +
    '+const auth = auth();\n',
  'diff --git a/README.md b/README.md\n' +
    'new file mode 100644\n' +
    'index 0000000..ad64e85\n' +
    '--- /dev/null\n' +
    '+++ b/README.md\n' +
    '@@ -0,0 +1 @@\n' +
    '+# small-test\n' +
    '\\ No newline at end of file\n'
]