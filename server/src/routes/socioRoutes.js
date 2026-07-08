const { Router } = require("express");
const { crearSocio } = require("../controllers/socioControllers");

const router = Router();

router.post("/", crearSocio);


module.exports = router;