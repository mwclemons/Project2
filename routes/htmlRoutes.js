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
    db.Characters.findAll({ where: { id: req.params.id } }).then(function(
      data
    ) {
      var hbsObject = {
        char: data
      };
      console.log(hbsObject);
      res.render("fight", hbsObject[0]);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("/*", function(req, res) {
    res.render("404");
  });
};
