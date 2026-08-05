const express = require("express");
const router = express.Router();
const {crearPlan, obtenerPlanes, eliminarPlan, actualizarPlan} = require("../controllers/planControllers");

router.get("/", obtenerPlanes);

router.post("/", crearPlan);

router.put("/:id", actualizarPlan);

router.delete("/:id", eliminarPlan);

module.exports = router;