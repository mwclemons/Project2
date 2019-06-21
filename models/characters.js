module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define("Characters", {
    name: DataTypes.STRING,
    health: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    special: DataTypes.STRING,
    specialInterval: DataTypes.INTEGER
  });
  return Characters;
};
