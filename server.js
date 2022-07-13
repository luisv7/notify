// require dependencies
const express = require("express");

// initialize express app
const app = express();

// configure app settings

// mount middlewear

// mount routes
app.get("/", (req, res) => {
    res.send("<h1>hello World</h1>");
});

// tell the app to listen for requests from the client
const port = 3000;
app.listen(port, () => {
    console.log(`express is listeting for request on port:${port}`);
});