const { DataTypes } = require("sequelize");

const Serial = (sequelize) => {
  sequelize.define("Serial", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    //TODO: modelo y tipo en otra tabla en otra tabla o a traves de un enum
  });
};

module.exports = Serial;
