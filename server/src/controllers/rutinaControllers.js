const { Rutina, Socio } = require("../models");

const obtenerRutinas = async (req, res) => {
    try {
        const rutinas = await Rutina.findAll({
            include: [
                {
                    model: Socio,
                },
            ],
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json(rutinas);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const obtenerRutinaId = async (req, res) => {
    try {
        const { id } = req.params;

        const rutina = await Rutina.findByPk(id, {
            include: [
                {
                    model: Socio,
                },
            ],
        });

        if (!rutina) {
            return res.status(404).json({
                error: "Rutina no encontrada",
            });
        }

        res.status(200).json(rutina);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const crearRutina = async (req, res) => {
    try {
        const rutina = await Rutina.create(req.body);

        res.status(201).json(rutina);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const actualizarRutina = async (req, res) => {
    try {
        const { id } = req.params;

        const rutina = await Rutina.findByPk(id);

        if (!rutina) {
            return res.status(404).json({
                error: "Rutina no encontrada",
            });
        }

        await rutina.update(req.body);

        res.status(200).json(rutina);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const eliminarRutina = async (req, res) => {
    try {
        const { id } = req.params;

        const rutina = await Rutina.findByPk(id);

        if (!rutina) {
            return res.status(404).json({
                error: "Rutina no encontrada",
            });
        }

        await rutina.destroy();

        res.status(200).json({
            mensaje: "Rutina eliminada correctamente",
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


module.exports = {
    obtenerRutinas,
    obtenerRutinaId,
    crearRutina,
    actualizarRutina,
    eliminarRutina,
};