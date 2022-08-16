const express = require('express');
const routerPokemons = express.Router();
const{getAllPokemoms,getByName,getById}=require('../controller/Controller.js')
const {createPokemonDB} = require('../controller/ControllerDB.js')

routerPokemons.get('/', async(req,res)=>{
    let {name} = req.query
    if(name){
        try {
            res.status(200).send(await getByName(name))
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


routerPokemons.get('/:id', async(req,res)=>{
    let {id} = req.params
    if(id){
        try {
            res.status(200).send(await getById(id))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
})


routerPokemons.post('/', async (req, res)=>{
    let {name,hp,attack,defense,speed,height,weight,background_image,types} = req.body
    if(name){
        try {
            res.status(200).send(await createPokemonDB(name,hp,attack,defense,speed,height,weight,background_image,types))
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
})

module.exports = routerPokemons