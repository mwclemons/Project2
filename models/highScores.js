module.exports = function(sequelize, DataTypes) {
  var HighScores = sequelize.define("highScoress", {
    name: DataTypes.STRING,
    characterUsed: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  });
  return HighScores;
};
