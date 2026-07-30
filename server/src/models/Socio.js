const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sucursal = require("./SucursalModel");

const Socio = sequelize.define('Socio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sucursalId: {
  type: DataTypes.INTEGER,
  allowNull: true,
  references: {
    model: "sucursales",
    key: "id",
  },
},
});

Sucursal.hasMany(Socio, {
  foreignKey: "sucursalId",
});

Socio.belongsTo(Sucursal, {
  foreignKey: "sucursalId",
});

module.exports = Socio;