const express = require("express");

const {
    obtenerPagos,
    obtenerPagoId,
    crearPago,
    actualizarPago,
    eliminarPago,
} = require("../controllers/pagoControllers");

const router = express.Router();

router.get("/", obtenerPagos);
router.get("/:id", obtenerPagoId);
router.post("/", crearPago);
router.put("/:id", actualizarPago);
router.delete("/:id", eliminarPago);

module.exports = router;