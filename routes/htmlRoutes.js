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

  app.get("/gameover", function(req, res) {
    db.HighScores.findAll({
      limit: 10,
      order: [["score", "DESC"]]
    }).then(function(data) {
      var hbsObject = {
        score: data
      };
      res.render("gameover", hbsObject);
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
          var cd;
          if (parseInt(req.params.score) === 0) {
            hp = data[0].health;
            cd = data[0].specialInterval;
          } else {
            hp = req.params.hp;
            hp = req.params.hp.substring(0, req.params.hp.indexOf("z"));
            cd = req.params.hp.substring(req.params.hp.indexOf("z") + 1);
          }

          var matchupData = {
            mycharacter: data,
            bosscharacter: bossdata,
            score: req.params.score,
            hp: hp,
            cd: cd
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
