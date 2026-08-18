const {  DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pago = sequelize.define('Pago', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    fechaPago: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    fechaVencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },

    importe: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "PAGADO",
    },

    socioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    planId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Pago;