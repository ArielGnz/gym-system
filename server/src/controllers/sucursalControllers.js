const Sucursal = require ("../models/SucursalModel");

const crearSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.create(req.body);
        res.status(201).json(sucursal);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const obtenerSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.findAll({order: [["nombre", "ASC"]], });
        res.json(sucursales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarSucursal = async (req,res) => {
    try {
        const { id } = req.params;
        await Sucursal.destroy({where: { id }, });
        res.json({ message: "Sucursal Eliminada"});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const actualizarSucursal = async (req, res) => {
  try {
    const { id } = req.params;

    await Sucursal.update(req.body, {
      where: { id },
    });

    res.json({ message: "Sucursal actualizada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    crearSucursal,
    actualizarSucursal,
    eliminarSucursal,
    obtenerSucursales,
}
