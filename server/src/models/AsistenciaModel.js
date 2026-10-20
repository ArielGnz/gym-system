const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Asistencia = sequelize.define("Asistencia", {
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = Asistencia;