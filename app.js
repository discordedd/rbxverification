const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', (req, res) => {

  console.log('message is delivered');

}); //app.post

const port = process.env.PORT || 3081;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});