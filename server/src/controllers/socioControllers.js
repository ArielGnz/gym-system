const Socio = require ("../models/Socio");

const crearSocio = async ( req, res ) =>{
    try {
        const nuevoSocio = await Socio.create(req.body);
        res.status(201).json(nuevoSocio);

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

const obtenerSocios = async (req, res) => {
  try {
    const socios = await Socio.findAll();

    res.status(200).json(socios);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const eliminarSocio = async (req, res) => {
  try {
    const { id } = req.params;
    
    await Socio.destroy({
      where: { id },
    });

    res.status(200).json({ message: "Socio Eliminado"});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const actualizarSocio = async (req, res) => {
  try {
    const { id } = req.params;
    
    await Socio.update(req.body, {
      where: { id },
    });

    res.status(200).json({ message: "Socio Actualizado"});

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    crearSocio,
    obtenerSocios,
    eliminarSocio,
    actualizarSocio,
};
