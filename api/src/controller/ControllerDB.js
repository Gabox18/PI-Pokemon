const { Pokemon , Types } = require('../db.js')

const CreateTypesDB = async (arrTypes) => {//crea los tipos en BD
  arrTypes.forEach((genre) => {
    Types.findOrCreate({
      where: { name: genre },
    });
  });
   let alltypes = await Types.findAll()
  return alltypes.map(e=>e.name)//.toString().trim().split(',')
};

const createPokemonDB = async (name,hp,attack,defense,speed,height,weight,background_image,types)=>{////crea los Pokemons en BD
  let createPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    background_image,
  })

let typesDB = await Types.findAll({
    where:{name : types} 
  })

await createPokemon.addTypes(typesDB)
return await Pokemon.findAll({
    where:{name : name} ,
    include:{
        model: Types,
        attributes:['name'],
        through: {
            attributes: []
        }
    }
})
};

const searchPokeDB = async (id , name) =>{//busca pokemons en BD por id o nombre 
  if(id){
      let poke = await Pokemon.findAll({
          where:{id : id} ,
          include:{
              model: Types,
              attributes:['name'],
              through: {
                  attributes: []
              }
          }
      })
      return poke[0]
  }else{
      return await Pokemon.findAll({
          where:{name : name} ,
          include:{
              model: Types,
              attributes:['name'],
              through: {
                  attributes: []
              }
          }
      })
  }
};

const getAllPokeDB = async ()=>{//trae todos los pokemon de la BD
  let pokeDB = await Pokemon.findAll({
    include:{
        model: Types,
        attributes:['name'],
        through: {
            attributes: []
        }
    }
})

let pokeDbFormat = pokeDB.map(e =>{
    return {
      id: e.id,
      name: e.name,
      background_image: e.background_image,
      types: e.types.map(t=>t.name),
      createdInDb: e.createdInDb,
      attack: e.attack
    }
})
return pokeDbFormat
}

module.exports = {
  CreateTypesDB,
  createPokemonDB,
  searchPokeDB,
  getAllPokeDB
}