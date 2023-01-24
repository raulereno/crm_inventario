const { DataTypes } = require("sequelize");

const Site = (sequelize) => {
  sequelize.define("Site", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
    },
  });
};

module.exports = Site;
