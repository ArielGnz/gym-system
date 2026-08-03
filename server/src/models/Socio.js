const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
    }
  },
  planId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "planes",
      key: "id",
    },
  },

});

module.exports = Socio;