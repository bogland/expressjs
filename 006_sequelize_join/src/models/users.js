module.exports = (sequelize, Sequelize) => {
  const Member = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });
  Member.associate = function (models) {
    Member.hasMany(models.board, {
      foreignKey: "userId",
      sourcekey: "id",
    });
  };
  return Member;
};
