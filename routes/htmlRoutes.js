var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Characters.findAll({}).then(function(data) {
      var hbsObject = {
        char: data
      };
      res.render("index", hbsObject);
    });
  });

  app.get("/fight:id&:bossid&:score&:hp", function(req, res) {
    db.Characters.findAll({ raw: true, where: { id: req.params.id } }).then(
      function(data) {
        db.BossCharacters.findAll({
          raw: true,
          where: { id: req.params.bossid }
        }).then(function(bossdata) {
          var hp;
          if (parseInt(req.params.score) === 0) {
            hp = data[0].health;
          } else {
            hp = req.params.hp;
          }

          var matchupData = {
            mycharacter: data,
            bosscharacter: bossdata,
            score: req.params.score,
            hp: hp
          };
          res.render("fight", matchupData);
        });
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("/*", function(req, res) {
    res.render("404");
  });
};
