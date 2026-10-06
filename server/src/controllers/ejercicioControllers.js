const { Ejercicio, Rutina } = require("../models");

const obtenerEjercicios = async (req, res) => {
    try {
        const ejercicios = await Ejercicio.findAll({
            include: [
                {
                    model: Rutina,
                },
            ],
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json(ejercicios);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const obtenerEjerciciosPorRutina = async (req, res) => {
    try {
        const { rutinaId } = req.params;

        const ejercicios = await Ejercicio.findAll({
            where: {
                rutinaId,
            },
            order: [["createdAt", "ASC"]],
        });

        res.status(200).json(ejercicios);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const obtenerEjercicioId = async (req, res) => {
    try {
        const { id } = req.params;

        const ejercicio = await Ejercicio.findByPk(id);

        if (!ejercicio) {
            return res.status(404).json({
                error: "Ejercicio no encontrado",
            });
        }

        res.status(200).json(ejercicio);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const crearEjercicio = async (req, res) => {
    try {
        const ejercicio = await Ejercicio.create(req.body);

        res.status(201).json(ejercicio);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const actualizarEjercicio = async (req, res) => {
    try {
        const { id } = req.params;

        const ejercicio = await Ejercicio.findByPk(id);

        if (!ejercicio) {
            return res.status(404).json({
                error: "Ejercicio no encontrado",
            });
        }

        await ejercicio.update(req.body);

        res.status(200).json(ejercicio);

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


const eliminarEjercicio = async (req, res) => {
    try {
        const { id } = req.params;

        const ejercicio = await Ejercicio.findByPk(id);

        if (!ejercicio) {
            return res.status(404).json({
                error: "Ejercicio no encontrado",
            });
        }

        await ejercicio.destroy();

        res.status(200).json({
            mensaje: "Ejercicio eliminado correctamente",
        });

    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};


module.exports = {
    obtenerEjercicios,
    obtenerEjerciciosPorRutina,
    obtenerEjercicioId,
    crearEjercicio,
    actualizarEjercicio,
    eliminarEjercicio,
};