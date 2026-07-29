const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Sucursal = sequelize.define(
  "Sucursal",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "sucursales",
    timestamps: true,
  }
);

module.exports = Sucursal;