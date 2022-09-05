const express = require('express');
const router = express.Router();
const bcd = require('../config/connection')
// Clientes 
const Cliente = require('../models/clientes')

router.get('/inicio', (req,res)=>{
    res.send("soy un inicio enrutado");
})

router.get('/inicio', (req,res)=>{
    res.send("soy un inicio enrutado");
})

router.get('/conectar', (req,res)=>{
    bcd.mongoose;
})



router.get('/', async(req, res)=>{
    try {
        const arrayClienteDB = await Cliente.find()
        console.log(arrayClienteDB)

        res.render("clientes", {
            arrayCliente : arrayClienteDB
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;