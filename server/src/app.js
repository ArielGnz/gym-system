const express = require("express");
const cors = require("cors");

const socioRoutes = require("./routes/socioRoutes");
const sucursalRoutes = require("./routes/sucursalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(socioRoutes);

app.use("/socios", socioRoutes);
app.use("/sucursales", sucursalRoutes);

// app.post("/test", (req, res) => {
//   res.json({
//     mensaje: "Ruta funcionando",
//   });
// });

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

module.exports = app;