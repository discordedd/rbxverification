const express = require("express");
const app = express();
var fs = require('fs');

app.get("/get", (request, response) => {
//some code to get data from a json file
response.send(data);
//you could use response.json() for sending json data
});

app.post("/post", (request, response) => {
//Not familiar with Lua, not really sure how the data is posted to the server(ask xXProGamerXx about it)
//some code to save data to a json file
//you could response.send() something back to confirm success
    Params = request.Params
    fs.appendFile("codes.json", {"yes": "yes"})
});