var idCounter = 2;

module.exports = {

  generateId: function(req, res, next) {
  skillz.id = idCounter++;
    res.json(skillz.id)
    next();
  },
};
