module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define("board", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
  });
  Board.associate = function (models) {
    Board.belongsTo(models.user, {
      foreignKey: "userId",
      targetkey: "id",
    });
  };

  return Board;
};
