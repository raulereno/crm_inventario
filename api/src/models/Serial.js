const { DataTypes } = require("sequelize");

const Serial = (sequelize) => {
  sequelize.define("Serial", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });
};

module.exports = Serial;
