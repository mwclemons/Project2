module.exports = function(sequelize, DataTypes) {
  var characters = sequelize.define("Characters", {
    name: DataTypes.STRING,
    health: DataTypes.INT,
    attack: DataTypes.INT,
    defense: DataTypes.INT,
    special: DataTypes.STRING,
    specialInterval: DataTypes.INT,
    name: DataTypes.STRING   
  });
  return characters;

};

