// require dependencies
require("dotenv").config();
const express = require("express");
const notesRouter = require("./controllers/notes");
const mongoose = require("mongoose");

// initialize express app
const app = express();

// configure app settings
const MongoURL = process.env.MONGO_URL
mongoose.connect(MongoURL);
mongoose.connection.on("connected", () => {
    console.log("connected to MongoDB");
});

// mount middlewear

// mount routes
app.get("/", (req, res) => {
    res.send("<h1>hello World</h1>");
});

app.use("/", notesRouter);

// tell the app to listen for requests from the client
const port = 3000;
app.listen(port, () => {
    console.log(`express is listeting for request on port:${port}`);
});