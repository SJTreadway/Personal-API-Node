name = {
  name: "Steven Treadway"
};
location = {
  location: "Dallas, TX"
};
occupations = {
  occupations: ["Web Developer", "Bama Fanatic"]
};
hobbies = [{
  name: 'Programming',
  type: 'current',
}, {
  name: 'Reading',
  type: 'current',
}, {
  name: 'Sports',
  type: 'past'
}];
skillz = [{
  id: 1,
  name: "Javascript",
  experience: "Intermediate"
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

  getSkillz: function(req, res) {
    res.json(skillz);
  },

  getSkillzExperience: function(req, res) {
    var skill = req.params.experience;
    var experience = [];
    for (var i in skillz) {
      if (skillz[i].experience.toLowerCase() === skill.toLowerCase()) {
        experience.push(skillz[i]);
      }
    }
    res.json(experience);
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

  addSkill: function(req, res) {
    newSkill = {
      id: skillz.id,
      name: req.body.name,
      experience: req.body.experience
    };
    skillz.push(newSkill);
    res.json(skillz);
  },







};
