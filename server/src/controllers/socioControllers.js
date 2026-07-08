const socio = require ("../models/Socio");

const crearSocio = async ( req, res ) =>{
    try {
        const nuevoSocio = await Socio.create(req.body);
        res.status(201).json(nuevoSocio);

    } catch (error) {
        res.status(500).json({error: error.message});
    }

}

module.exports = {
    crearSocio
};