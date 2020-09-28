const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const requestLogger = (request, response, next) => {
    console.log("Method: ", request.method);
    console.log("Path: ", request.path);
    console.log("Body", request.body);
    //console.log("Headers", request.headers);
    console.log("---");
    next();
};

app.use(requestLogger);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(port, function() {
    console.log("Listening on port", port);
});
