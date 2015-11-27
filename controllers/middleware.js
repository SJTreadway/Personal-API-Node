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
  	console.log('params name', req.params.username, 'params pin', req.params.pin)
  	console.log('steven', userName.toLowerCase());
  	console.log('pin', pin)
  	if ((req.params.username === userName.toLowerCase()) && (req.params.pin === pin)) {
  		next();
  	}
  	else {
  		res.send('Wrong username/password. Try again.');
  	}
  },

};
