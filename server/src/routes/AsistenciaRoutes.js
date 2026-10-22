const express = require("express");
const router = express.Router();

const {
    obtenerAsistencias,
    registrarAsistencia,
    eliminarAsistencia,
} = require("../controllers/asistenciaControllers");

router.get("/", obtenerAsistencias);
router.post("/", registrarAsistencia);
router.delete("/:id", eliminarAsistencia);

module.exports = router;