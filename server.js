var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mainCtrl = require('./controllers/mainCtrl');
var app = express();

app.use(bodyParser.json());
app.use(cors());
app.listen(9001, function(e) {
  if (e) return console.error(e);
});

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
// app.get('/hobbies/:type', mainCtrl.getHobbiesType);
