const { Pago, Socio, Plan } = require('../models');

// const obtenerPagos = async (req, res) => {
//     try {
//         const pagos = await Pago.findAll({
//             incclude: [
//                 {
//                     model: Socio,
//                 },
//                 {
//                     model: Plan,
//                 },
//             ],
//             order: [["fechaPago", "DESC"]]
//         });

//         res.status(200).json(pagos);

//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }

const obtenerPagos = async (req, res) => {
    try {
        const pagos = await Pago.findAll({
            incclude: [
                Socio,
                Plan,
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

const crearPago = async (req, res) => {
    try {

        const {
            fechaPago,
            fechaVencimiento,
            importe,
            estado,
            socioId,
            planId,
        } = req.body;

        const pago = await Pago.create({
            fechaPago,
            fechaVencimiento, 
            importe,
            estado,
            socioId,
            planId
        });

        res.status(201).json(pago);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const actualizarPago = async (req, res) => {
    try {
        
        const { id } = req.params;
        
        const pago = await Pago.findByPk(id);

        if(!pago) {
            return res.status(404).json({
                error: "Pago no encontrado"
            });
        }

        await pago.update(req.body);

        res.status(200).json({message: "Pago Actualizado", pago});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const eliminarPago = async (req, res) => {
    try {
        
        const {id} = req.params;

        const pago = await Pago.findByPk(id);

        if(!pago) {
            return res.status(404).json({
                error: "Pago no encontrado"
            });
        }

        await pago.destroy();

        res.status(200).json({message: "Pago Eliminado"});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    obtenerPagos, 
    obtenerPagoId,
    crearPago,
    actualizarPago,
    eliminarPago,
}