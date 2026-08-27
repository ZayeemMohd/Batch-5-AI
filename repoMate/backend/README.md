[
  Document {
    pageContent: '# small-test',
    metadata: {
      source: 'README.md',
      repository: 'https://github.com/ZayeemMohd/small-test',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: '//we do authentication here\n\nconst auth = auth();\n',
    metadata: {
      source: 'authentication',
      repository: 'https://github.com/ZayeemMohd/small-test',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: 'const pdfviewer = pdf();\n',
    metadata: {
      source: 'frontend.js',
      repository: 'https://github.com/ZayeemMohd/small-test',
      branch: 'main'
    },
    id: undefined
  }
]






[
  Document {
    pageContent: '# test-1\ncreating repo just for testing purposes\n',
    metadata: {
      source: 'README.md',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: "const express = require('express');\n" +
      "const bcrypt = require('bcrypt');\n" +
      "const jwt = require('jsonwebtoken');\n" +
      "const { validateUser } = require('./utils');\n" +
      '\n' +
      'const router = express.Router();\n' +
      '\n' +
      "router.post('/register', async (req, res) => {\n" +
      '\n' +
      '});\n' +
      '\n' +
      "router.post('/login', async (req, res) => {\n" +
      '\n' +
      '});\n' +
      '\n' +
      'module.exports = router;\n',
    metadata: {
      source: 'auth.js',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: '"this is my new file" \n',
    metadata: {
      source: 'new_file.txt',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: '{\n' +
      '  "name": "taskflow-api",\n' +
      '  "version": "1.0.0",\n' +
      '  "description": "A simple task management API with JWT authentication",\n' +
      '  "main": "server.js",\n' +
      '  "scripts": {\n' +
      '    "start": "node server.js",\n' +
      '    "dev": "nodemon server.js"\n' +
      '  },\n' +
      '  "keywords": ["api", "tasks", "jwt", "express"],\n' +
      '  "author": "TaskFlow Team",\n' +
      '  "license": "MIT",\n' +
      '  "dependencies": {\n' +
      '    "express": "^4.18.2",\n' +
      '    "jsonwebtoken": "^9.0.2",\n' +
      '    "bcrypt": "^5.1.1",\n' +
      '    "dotenv": "^16.3.1"\n' +
      '  },\n' +
      '  "devDependencies": {\n' +
      '    "nodemon": "^3.0.1"\n' +
      '  }\n' +
      '}\n',
    metadata: {
      source: 'package.json',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: 'This is my first product \n',
    metadata: {
      source: 'product.txt',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  },
  Document {
    pageContent: "const express = require('express');\n" +
      "const dotenv = require('dotenv');\n" +
      "const authRoutes = require('./auth');\n" +
      "const taskRoutes = require('./tasks');\n" +
      '\n' +
      'const app = express();\n' +
      'const PORT = process.env.PORT || 3000;\n' +
      'app.use(express.json());\n' +
      "app.use('/api/auth', authRoutes);\n" +
      "app.use('/api/tasks', taskRoutes);\n" +
      "app.get('/health', (req, res) => {\n" +
      "  res.json({ status: 'healthy', timestamp: new Date().toISOString() });\n" +
      '});\n' +
      'app.listen(PORT, () => {\n' +
      '  console.log(`🚀 TaskFlow API running on port ${PORT}`);\n' +
      '});\n' +
      '\n' +
      'module.exports = app;\n',
    metadata: {
      source: 'server.js',
      repository: 'https://github.com/ZayeemMohd/taskflowAI',
      branch: 'main'
    },
    id: undefined
  }
]



Generating summary...
Summary Generated for:  auth.js
This module defines an Express router responsible for handling user authentication endpoints. It imports `bcrypt` for password hashing,`jsonwebtoken` for issuing JWT tokens, and a custom `validateUser` utility for input validation. The file sets up skeleton route handlers for two HTTP POST endpoints: `/register` for creating new user accounts and `/login` for authenticating existing users. Finally, it exports the configured Express router to be mounted in the main application.


[
   -0.015248057,    0.03239523,  0.00030602954,   0.021580799,   0.014467005,
   0.0012408549,    0.03377368,    0.008653892,  -0.008992091,   -0.03935642,
   -0.037273616, -0.0023956904,    0.006938814, -0.0016875397, 0.00060250657,
   -0.010115894,   0.007866427,   0.0041266223,  -0.013352943,  -0.010893859,
   -0.016465997, -0.0036740277,    0.015559064,  -0.016549125, -0.0048892056,
   -0.012556007,  -0.009284352,   -0.024458976,  -0.016504267,    0.11038428,
    0.007942442,  -0.029454865,  -0.0024054018,   0.013800606, -0.0003656279,
    0.013428139,  0.0011274944,     0.00827388,   0.003197727, -0.0036987374,
   0.0025559536,   0.005992234,  -0.0068915086,   0.008341705,    0.02168352,
   -0.009000903,   0.022526933,  -0.0129505005,  -0.006049302,  -0.004663603,
    0.016304243,  0.0066818115,  0.00071374065,  -0.018212542,   -0.02491192,
   0.0065851174,    0.04631525, -0.00026150906,   0.012682734,    0.00798092,
    0.011452637,  -0.016869348,    0.021944197,   0.013884395,   0.019612622,
    -0.03485153,  0.0077516646,  -0.0057828617,  -0.028807065, -0.0125386715,
    0.034782346, -0.0076373746,    -0.03191589, -0.0025118503,  -0.025930554,
   -0.056323472,   -0.01189455,   -0.015549608, -0.0045412052,    0.01625658,
    0.010602818,   0.016653592,   -0.026912658,  -0.004430892,  -0.016733618,
  -0.0055569042, -0.0027252946,   0.0070597986,   0.008482368,   0.005816958,
   -0.011162775,  -0.016576864,   0.0052369856, -0.0018851213,  -0.007139095,
   -0.006875273,  -0.011542616,   0.0058234185,  -0.021535242,  -0.010842454,
  ... 2972 more items
]