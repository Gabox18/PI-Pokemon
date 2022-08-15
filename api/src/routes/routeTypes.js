const express = require('express');
const routerTypes = express.Router();
const{getAllTypes}=require('../controller/Controller.js')

routerTypes.get('/', async(req,res)=>{
    try {
        res.status(200).send(await getAllTypes())
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = routerTypes