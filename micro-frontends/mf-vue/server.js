require('dotenv').config()

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/dist')))

// Send down a basic html for the /posts.html for simpler testing
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

const port = process.env.VUE_PORT || 3002
app.listen(port, () => console.log(`Vue app listening on port ${port}!`))