var idCounter = 2,
	userName = 'Steven',
	pin = 1234;

module.exports = {

  generateId: function(req, res, next) {
  skillz.id = idCounter++;
    res.json(skillz.id)
    next();
  },

  verifyUser: function(req, res, next) {
  	if (req.params.username.toLowerCase() === userName.toLowerCase() && parseInt(req.params.pin) === pin) {
  		next();
  	}
  	else {
  		res.status(400);
  		res.send('Wrong username/password. Try again.');
  	}
  },
  
};
