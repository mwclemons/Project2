require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

const {
  actionssdk,
  Image,
} = require ('actions-on-google');

const act = actionssdk();

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

act.intent("actions.intent.MAIN", conv => {
  conv.ask("Which character do you choose?");
  conv.ask("Here is a picture of your character");
  conv.ask(new Image({
    url: 'https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/imgs/160204193356-01-cat-500.jpg',
    alt: "a cat",
  }));
});

act.intent("actions.intent.TEXT", (conv, input) => {
  if (input === "bye" || input === "goodbye") {
    return conv.close("See you later!")
  }
  conv.ask("I didn't undestand. Can you tell e something else?");
});

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
module.exports = act;
