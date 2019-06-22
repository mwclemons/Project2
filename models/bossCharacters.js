module.exports = function(sequelize, DataTypes) {
  var BossCharacters = sequelize.define("BossCharacters", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    health: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    special: DataTypes.STRING,
    specialInterval: DataTypes.INTEGER
  });
  return BossCharacters;
};
