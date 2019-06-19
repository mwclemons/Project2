module.exports = function(sequelize, DataTypes) {

var highScores = sequelize.define("highScoress", {
    name: DataTypes.STRING,
    characterUsed: DataTypes.INT,
    score: DataTypes.INT
  });
  return highScores;
};

