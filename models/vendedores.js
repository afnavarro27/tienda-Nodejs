const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vendedorSchema = new Schema({
    nombre : String,
    documento : BigInt,
    ventasDespachadas : Number
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;