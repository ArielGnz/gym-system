const Sucursal = require ("../models/SucursalModel");

const crearSucursal = async (req, res) => {
    try {
        const sucursal = await Sucursal.create(req.body);
        res.status(201).json(sucursal);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};