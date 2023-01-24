const { DataTypes } = require("sequelize");

const Type = (sequelize) => {
  sequelize.define("Type", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Type;
