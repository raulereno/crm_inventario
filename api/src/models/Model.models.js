const { DataTypes } = require("sequelize");

const Model = (sequelize) => {
  sequelize.define("Model", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    model_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Model;
