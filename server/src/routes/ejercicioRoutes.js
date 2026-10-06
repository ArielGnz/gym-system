const express = require("express");

const {
    obtenerEjercicios,
    obtenerEjerciciosPorRutina,
    obtenerEjercicioId,
    crearEjercicio,
    actualizarEjercicio,
    eliminarEjercicio,
} = require("../controllers/ejercicioControllers");

const router = express.Router();

router.get("/", obtenerEjercicios);

router.get("/rutina/:rutinaId", obtenerEjerciciosPorRutina);

router.get("/:id", obtenerEjercicioId);

router.post("/", crearEjercicio);

router.put("/:id", actualizarEjercicio);

router.delete("/:id", eliminarEjercicio);

module.exports = router;