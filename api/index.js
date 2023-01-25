const { sequelize, Serial } = require("./src/db");
const server = require("./src/app");
const { PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    // Serial.create({ status: "unistalled" });
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
});
