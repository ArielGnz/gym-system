const { Pago, Socio, Plan } = require('../models');

const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll({
            incclude: [
                {
                    model: Socio,
                },
                {
                    model: Plan,
                },
            ],
            order: [["fechaPago", "DESC"]]
        });

        res.status(200).json(pagos);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const obtenerPagoId = async (req, res) => {
    try {
        const { id } = req.params;

        const pago = await Pago.findByPk(id, {
            include: [
                {
                    model: Socio,
                },
                {
                    model: Plan,
                },
            ],
        });

        if (!pago) {
            return res.status(404).json({error: "Pago no encontrado"});
        }

        res.status(200).json(pago);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}