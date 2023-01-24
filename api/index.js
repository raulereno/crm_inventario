const { sequelize } = require("./src/db");
const server = require("./src/app");
const { PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
});
