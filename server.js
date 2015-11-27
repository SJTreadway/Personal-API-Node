var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var middleware = require('./controllers/middleware');
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
app.get('/occupations/name', mainCtrl.getOccupationsName);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/name', mainCtrl.getHobbiesName);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/skillz', mainCtrl.getSkillz);
app.get('/skillz/name', mainCtrl.getSkillzName);
app.get('/skillz/:experience', mainCtrl.getSkillzExperience);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);

app.post('/occupations', mainCtrl.addOccupation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/skillz', middleware.generateId, mainCtrl.addSkill);
