const express = require('express');
const router = express.Router();
const bcd = require('../config/connection')


router.get('/inicio', (req,res)=>{
    res.send("soy un inicio enrutado");
})

router.get('/inicio', (req,res)=>{
    res.send("soy un inicio enrutado");
})

router.get('/conectar', (req,res)=>{
    bcd.mongoose;
})

module.exports = router;