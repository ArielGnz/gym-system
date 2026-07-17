const { Router } = require("express");
const { crearSocio, obtenerSocios, eliminarSocio, actualizarSocio } = require("../controllers/socioControllers");

const router = Router();

router.post("/", crearSocio);
router.get("/", obtenerSocios);
router.delete("/:id", eliminarSocio);
router.put("/:id", actualizarSocio);

module.exports = router;