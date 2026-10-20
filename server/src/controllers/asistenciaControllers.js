const { Asistencia, Socio } = require("../models");

// Obtener todas las asistencias
const obtenerAsistencias = async (req, res) => {
    try {
        const asistencias = await Asistencia.findAll({
            include: [
                {
                    model: Socio,
                },
            ],
            order: [
                ["fecha", "DESC"],
                ["hora", "DESC"],
            ],
        });

        res.json(asistencias);
    } catch (error) {
        console.error("Error al obtener asistencias:", error);
        res.status(500).json({
            mensaje: "Error al obtener las asistencias",
        });
    }
};

// Registrar asistencia
const registrarAsistencia = async (req, res) => {
    try {
        const { socioId, fecha, hora } = req.body;

        if (!socioId) {
            return res.status(400).json({
                mensaje: "Debés seleccionar un socio",
            });
        }

        const socio = await Socio.findByPk(socioId);

        if (!socio) {
            return res.status(404).json({
                mensaje: "El socio no existe",
            });
        }

        // Usar la fecha local del gimnasio si no se envía una
        const ahora = new Date();
        const fechaActual = [
            ahora.getFullYear(),
            String(ahora.getMonth() + 1).padStart(2, "0"),
            String(ahora.getDate()).padStart(2, "0"),
        ].join("-");

        const fechaAsistencia = fecha || fechaActual;

        // Evitar dos asistencias del mismo socio en el mismo día
        const asistenciaExistente = await Asistencia.findOne({
            where: {
                socioId,
                fecha: fechaAsistencia,
            },
        });

        if (asistenciaExistente) {
            return res.status(409).json({
                mensaje: "Este socio ya tiene una asistencia registrada para esa fecha",
            });
        }

        const nuevaAsistencia = await Asistencia.create({
            socioId,
            fecha: fechaAsistencia,
            ...(hora ? { hora } : {}),
        });

        const asistenciaCompleta = await Asistencia.findByPk(
            nuevaAsistencia.id,
            {
                include: [{ model: Socio }],
            }
        );

        res.status(201).json(asistenciaCompleta);
    } catch (error) {
        console.error("Error al registrar asistencia:", error);
        res.status(500).json({
            mensaje: "Error al registrar la asistencia",
        });
    }
};

// Eliminar asistencia
const eliminarAsistencia = async (req, res) => {
    try {
        const { id } = req.params;

        const asistencia = await Asistencia.findByPk(id);

        if (!asistencia) {
            return res.status(404).json({
                mensaje: "La asistencia no existe",
            });
        }

        await asistencia.destroy();

        res.json({
            mensaje: "Asistencia eliminada correctamente",
        });
    } catch (error) {
        console.error("Error al eliminar asistencia:", error);
        res.status(500).json({
            mensaje: "Error al eliminar la asistencia",
        });
    }
};

module.exports = {
    obtenerAsistencias,
    registrarAsistencia,
    eliminarAsistencia,
};