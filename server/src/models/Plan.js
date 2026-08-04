const {  DataTypes } = require("sequelize");
const sequelize = require('../config/database');

const Plan = sequelize.define(
    "Plan",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        duracionDias: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "planes",
    }
);

module.exports = Plan;