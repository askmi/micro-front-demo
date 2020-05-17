require("dotenv").config();

const path = require("path");
const proxy = require("express-http-proxy");
const express = require("express");
const app = express();

app.use("/mf-react", proxy(process.env.REACT_URL));
app.use("/mf-vue", proxy(process.env.VUE_URL));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "./index.html")));

const port = process.env.PORT || 3000;

app.listen(port, () => `Listening for connections on port ${port}`);
