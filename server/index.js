const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const haversine = require("./haversine");

const app = express();
app.use(bodyParser.json());
app.use(pino);

app.post(`/api/calculateDistance`, (req, res) => {
  var start = {
    latitude: req.body.lat1, //38.898556,
    longitude: req.body.long1 //-77.037852
  };
  var end = {
    latitude: req.body.lat2, //38.897147,
    longitude: req.body.long2 //-77.043934
  };
  var resultCalc = haversine(start, end);
  res.send(JSON.stringify({ calDist: `${resultCalc}` }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
