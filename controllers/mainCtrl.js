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
    var name = {
      name: "Steven Treadway"
    }
    res.json(name);
  },

  getLocation: function(req, res) {
    var location = {
      location: "Dallas, TX"
    }
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
};
