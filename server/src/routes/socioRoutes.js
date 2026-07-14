const { Router } = require("express");
const { crearSocio, obtenerSocios, eliminarSocio } = require("../controllers/socioControllers");

const router = Router();

router.post("/", crearSocio);
router.get("/", obtenerSocios);
router.delete("/:id", eliminarSocio);

module.exports = router;