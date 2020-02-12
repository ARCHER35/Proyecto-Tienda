const express = require('express')
const router = express.Router()

const Productos = require('../models/producto')

router.post('/nueva-producto', async(require,respuesta) =>{
    const body = require.body
    try{
        const productoBD = await Productos.create(body)
        respuesta.status(200).json(productoBD)
    } catch (error) {
        return respuesta.status(500).json({
            mensaje:'estas mal,seguir tu camino', error
        })
    }
})

//get all data
router.get('/producto', async(require, respuesta)=>{
    try{
        ProductoBD = await Productos.find()
        respuesta.json(ProductoBD)
    } catch (error) {
        return respuesta.status(400).json({
            mensaje:'no se puede ver las productos sigue participando', error
        })
    }
})

//get params id esto servira para el front con vue

router.get('/producto/:id', async(require, respuesta)=>{
    const _id =require.params.id
    try{
        const ProductoBD = await Productos.findOne({_id})
        respuesta.json(ProductoBD)
    }catch (error){
        return respuesta.status(400).json({
            menssaje: 'no se encuentra la producto con ese id, sigue participando',
            error
        })
    }
})

//delete de una producto por id 

router.delete('/producto/:id', async(require, respuesta)=>{
    const _id = require.params.id
    try {
        const ProductoBD =await Productos.findByIdAndDelete({_id})
        respuesta.json(ProductoBD)
    }catch (error){
        return respuesta.status(400).json({
            mensaje: 'por favor no cometer el error de nuevo, siga el buen camino' , error
        })
    }
})

//put aqui se actualiza a travez de un body

router.put('/producto/:id', async(require, respuesta)=>{
    const body = require.body
    const _id = require.params.id
    try {
        const ProductoBD = await Productos.findByIdAndUpdate(_id,body, {new:true})
        respuesta.json(ProductoBD)
    }catch (error) {
        return respuesta.status(400).json({
            mensaje: 'es mas que suficiente, es toxic@ , la practica hace al maestro' , error
        })
    }
})

module.exports = router 