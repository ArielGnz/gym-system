const Socio = require("./Socio");
const Sucursal = require("./SucursalModel");
const Plan = require("./Plan");
const Pago = require("./Pago"); 

Sucursal.hasMany(Socio, {
  foreignKey: "sucursalId",
});

Socio.belongsTo(Sucursal, {
  foreignKey: "sucursalId",
});

Sucursal.hasMany(Plan, {
    foreignKey: "sucursalId",
});

Plan.belongsTo(Sucursal, {
    foreignKey: "sucursalId",
});

Plan.hasMany(Socio, {
    foreignKey: "planId",
});

Socio.belongsTo(Plan, {
    foreignKey: "planId",
});

Socio.hasMany(Pago, {
    foreignKey: 'socioId',
});

Pago.belongsTo(Socio, {
    foreignKey: 'socioId',
});

Plan.hasMany(Pago, {
    foreignKey: 'planId',
});

Pago.belongsTo(Plan, {
    foreignKey: 'planId',
});

module.exports = {
  Socio,
  Sucursal,
  Plan,
  Pago,
};