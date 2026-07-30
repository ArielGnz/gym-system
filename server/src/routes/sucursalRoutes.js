const express = require("express");
const router = express.Router();
const {
    crearSucursal,
    obtenerSucursal,
    eliminarSucursal,
    acualizarSucursal,
} = require("../controllers/sucursalControllers");

router.get("/", obtenerSucursales);

router.post("/", crearSucursal);

router.put("/:id", actualizarSucursal);

router.delete("/:id", eliminarSucursal);

module.exports = router;