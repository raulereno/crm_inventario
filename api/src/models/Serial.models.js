const { DataTypes } = require("sequelize");

const Serial = (sequelize) => {
  sequelize.define(
    "Serial",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      num_serial: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      //YYYY-MM-DD
      start_assurance: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      //TODO:Calcular la fecha dado un numero de garantia ej: 4
      end_assurance: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      global_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },

    {
      timestamps: false,
      hooks: {
        beforeCreate: (model, options) => {
          switch (model.status) {
            case "production":
              model.global_status = "Produccion";
              break;

            case "storage":
            case "transition":
              model.global_status = "Bodega";
              break;
            case "laboratory":
              model.global_status = "Laboratorio";
              break;
            case "vandalism":
            case "unistalled":
              model.global_status = "Fuera de invetario";
              break;
            case "configure":
              model.global_status = "Configurado";
              break;
            case "disconnected":
              model.global_status = "Pre-producción";
              break;
            case "off_disconnectedOnSite":
              model.global_status = "Post-producción";
              break;

            default:
              model.global_status = "";
              break;
          }
        },
      },
    }
  );
};

module.exports = Serial;
