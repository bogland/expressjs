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

  return Board;
};
