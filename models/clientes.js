const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema ({
    nombre : String,
    tel : String,
    totalComprado : Boolean ,
    historicoCompras : Boolean,
    ubicacion :     {longitud : Boolean,
        latitud : Boolean,
        zoom :  Number}
})

const Cliente = mongoose.model('Cliente', clienteSchema); 

module.exports = Cliente;  