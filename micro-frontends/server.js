require('../app/dotenv').config()

const path = require('../app/path');
const express = require('../app/express');
const app = express();

app.use("/mf-react", express.static(path.join(__dirname, '/mf-react/dist')))
app.use("/mf-vue", express.static(path.join(__dirname, '/mf-vue/dist')))

// Send down a basic html for the /posts.html for simpler testing
app.get('/r', (req, res) => res.sendFile(path.join(__dirname, '/mf-react/index.html')))
app.get('/v', (req, res) => res.sendFile(path.join(__dirname, '/vue/index.html')))
app.get('/a', (req, res) => res.sendFile(path.join(__dirname, '/angular/index.html')))

const port = 3001
app.listen(port, () => console.log(`Server listening on port ${port}!`))