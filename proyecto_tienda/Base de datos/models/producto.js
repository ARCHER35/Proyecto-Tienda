const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoSchema = new Schema ({
    variedad:{type:String, required:[true,'nombre obligatorio']},
    nombre:{type:String, required:[true,'nombre obligatorio']},
    descripcion: String,
    precio: Number,
    portada: String,
    estado:{type:Boolean, default:false}
})

const Producto = mongoose.model('Producto', ProductoSchema)

module.exports = Producto