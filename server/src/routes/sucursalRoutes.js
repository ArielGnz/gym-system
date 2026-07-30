const express = require("express");
const router = express.Router();
const {
    crearSucursal,
    obtenerSucursales,
    eliminarSucursal,
    actualizarSucursal,
} = require("../controllers/sucursalControllers");

router.get("/", obtenerSucursales);

router.post("/", crearSucursal);

router.put("/:id", actualizarSucursal);

router.delete("/:id", eliminarSucursal);

module.exports = router;