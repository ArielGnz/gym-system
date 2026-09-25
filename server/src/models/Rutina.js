const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Rutina = sequelize.define("Rutina", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    nivel: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    diasPorSemana: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    socioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Rutina;