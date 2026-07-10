const { Router } = require("express");
const { crearSocio, obtenerSocios } = require("../controllers/socioControllers");

const router = Router();

router.post("/", crearSocio);
router.get("/", obtenerSocios);

module.exports = router;