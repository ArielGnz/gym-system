const Plan = require("../models/Plan");
const Sucursal = require("../models/SucursalModel");

const crearPlan = async (req, res) => {
    try {
        const plan = await Plan.create(req.body);
        res.status(201).json(plan);
    } catch (error) {
        res.status(400).json({ message: error.message });   
    }
};

const obtenerPlanes = async (req, res) => {
    try {
        const planes = await Plan.findAll({
            include: Sucursal,
            order: [[ "nombre", "ASC"]]
        });
        res.status(200).json(planes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const actualizarPlan = async (req, res) => {
    try {
        const { id } = req.params;
        await Plan.update(req.body, {
            where: { id },
        });
        res.status(200).json({ message: "Plan actualizado" });
    } catch (error) {
        res.status(500).json({ message: error.message });   
    }
};

const eliminarPlan = async (req, res) => {
    try {
        const { id } = req.params;
        await Plan.destroy({
            where: { id },
        });
        res.status(200).json({ message: "Plan eliminado" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
