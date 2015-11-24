var name = {
  name: "Steven Treadway"
};
var location = {
  location: "Dallas, TX"
};
var occupations = {
  occupations: ["Web Developer", "Bama Fanatic"]
};
var hobbies = [{
  name: 'Programming',
  type: 'current',
}, {
  name: 'Reading',
  type: 'current',
}, {
  name: 'Sports',
  type: 'past'
}];

module.exports = {

  getName: function(req, res) {
    res.json(name);
  },

  getLocation: function(req, res) {
    res.json(location);
  },

  getOccupations: function(req, res) {
    if (req.query.id === 'asc') {
      res.json(occupations.occupations.sort());
    }
    else {
      res.json(occupations.occupations.reverse());
    }
    
  },

  getLatestOccupation: function(req, res) {
    var latestOccupation;
      latestOccupation = {
        latestOccupation: occupations.occupations.slice(1),
      };
    res.json(latestOccupation);
  },

  getHobbies: function(req, res) {
    res.json(hobbies);
  },

  getHobbiesType: function(req, res) {
    var hobby = req.params.type;
    var hobbyType = [];
    for (var i in hobbies) {
      if (hobbies[i].type === hobby) {
        hobbyType.push(hobbies[i]);
      }
    }
    res.json(hobbyType);
  },

  changeName: function(req, res) {
    name = {
      name: req.body.name,
    };
    res.json(name);
  },

  changeLocation: function(req, res) {
    location = {
      location: req.body.location,
    };
    res.json(location);
  },

  addOccupation: function(req, res) {
    newOccupation = {
      occupation: req.body.occupation
    };
    occupations.occupations.push(newOccupation.occupation);
    res.json(newOccupation);
  },

  addHobby: function(req, res) {
    newHobby = {
      name: req.body.name,
      type: req.body.type
    };
    hobbies.push(newHobby);
    res.json(hobbies);
  },









};
