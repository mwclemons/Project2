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

  app.get("/fight:id", function(req, res) {
    db.Characters.findAll({ raw: true, where: { id: req.params.id } }).then(
      function(data) {
        db.BossCharacters.findAll({ raw: true, where: { id: 1 } }).then(
          function(bossdata) {
            var matchupData = {
              mycharacter: data,
              bosscharacter: bossdata
            };
            console.log(matchupData);
            res.render("fight", matchupData);
          }
        );
      }
    );
  });

  // Render 404 page for any unmatched routes
  app.get("/*", function(req, res) {
    res.render("404");
  });
};
