const app = require("./app");
const sequelize = require("./config/database");
const Socio = require("./models/Socio");

const PORT = 3001;

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    console.log("Base de datos conectada");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar la base de datos");
    console.error(error.message);
  }
}

startServer();