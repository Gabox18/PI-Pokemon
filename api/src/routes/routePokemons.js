const express = require('express');
const routerPokemons = express.Router();
const{getAllPokemoms}=require('../controller/Controller.js')

routerPokemons.get('/', async(req,res)=>{
    try {
        res.status(200).send(await getAllPokemoms())
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
})

module.exports = routerPokemons