const { DataTypes } = require("sequelize");

const Site = (sequelize) => {
  sequelize.define(
    "Site",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //TODO: el primer numero es la latitud y el segundo es la longitud
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sla: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeCreate: (model, options) => {
          switch (model.city) {
            case value:
              model.sla = 2;
              break;
            case value:
              model.sla = 4;
              break;
            case value:
              model.sla = 8;
              break;

            default:
              break;
          }
        },
      },
    }
  );
};

module.exports = Site;
