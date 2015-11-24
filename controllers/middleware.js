module.exports = {

  generateId: function(req, res, next) {
    var idCounter = 0;
    // req.id = idCounter++;
    // skillz.id = req.id;
    for (var i in skillz) {
      skillz[i].id = {
        id: idCounter++,
      }
      skillz[i].id = idCounter++;
      res.json(skillz)
      next();
    }
  },



};
