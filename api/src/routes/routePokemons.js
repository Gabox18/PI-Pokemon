const express = require('express');
const routerPokemons = express.Router();
const{getAllPokemoms,getByID}=require('../controller/Controller.js')

routerPokemons.get('/', async(req,res)=>{
    let {id} = req.query
    if(id){
        try {
            res.status(200).send(await getByID(id))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }else{
        try {
            res.status(200).send(await getAllPokemoms())
        } catch (e) {
            res.status(400).json({ error: e.message });
        }  
    }
    
})

module.exports = routerPokemons