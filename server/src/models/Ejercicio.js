const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Ejercicio = sequelize.define("Ejercicio", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    series: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    repeticiones: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    peso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },

    descanso: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    rutinaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Ejercicio;