module.exports = function(sequelize, DataTypes) {
  var HighScores = sequelize.define("highScores", {
    name: DataTypes.STRING,
    characterUsed: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return HighScores;
};
