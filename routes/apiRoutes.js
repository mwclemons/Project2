var db = require("../models");

module.exports = function(app) {
  // Get all characters
  app.get("/api/characters", function(req, res) {
    db.Characters.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // Create a new score
  app.post("/api/newscore", function(req, res) {
    db.HighScores.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/scores:id", function(req, res) {
    db.HighScores.findAll({ where: { id: req.params.id } }).then(function(
      data
    ) {
      res.json(data);
    });
  });

  // Get character by id
  app.get("/api/characters/:id", function(req, res) {
    db.Characters.findAll({ where: { id: req.params.id } }).then(function(
      data
    ) {
      res.json(data);
    });
  });
};
