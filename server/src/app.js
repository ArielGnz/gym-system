const express = require("express");
const cors = require("cors");

const socioRoutes = require("./routes/socioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(socioRoutes);
app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

module.exports = app;