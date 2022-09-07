const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    referencia : Number,
    nombre : String,
    descripcion : Text,
    precio : Number,
    stock : Number,
    //imagen : ,
    habilitado : Boolean
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;