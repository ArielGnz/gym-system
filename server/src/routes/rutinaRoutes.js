const express = require("express");

const {
    obtenerRutinas,
    obtenerRutinaId,
    crearRutina,
    actualizarRutina,
    eliminarRutina,
} = require("../controllers/rutinaControllers");

const router = express.Router();

router.get("/", obtenerRutinas);
router.get("/:id", obtenerRutinaId);
router.post("/", crearRutina);
router.put("/:id", actualizarRutina);
router.delete("/:id", eliminarRutina);

module.exports = router;