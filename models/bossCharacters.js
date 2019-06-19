module.exports = function(sequelize, DataTypes) {

  var bossCharacters = sequelize.define("bossCharacters", {
    name: DataTypes.STRING,
    health: DataTypes.INT,
    attack: DataTypes.INT,
    defense: DataTypes.INT,
    special: DataTypes.STRING,
    specialInterval: DataTypes.INT,
    name: DataTypes.STRING   
  });
  return bossCharacters;

};

