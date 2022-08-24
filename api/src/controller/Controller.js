const axios = require('axios');
const {CreateTypesDB,searchPokeDB,getAllPokeDB} = require('./ControllerDB.js')
//const URL_API_POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=40';
const {data ,dataType} = require('../../data.js')

const getAllPokemoms = async ()=>{//trae 40 pokemons de la Api
  try {
    // let pokemonApi=[],pokemonDB=[],AllPokemon=[]
    // for (let i = 0; i<=3; i++) {//for para que resuelva de 10 en 10 promesas
    //   const response = await axios(`https://pokeapi.co/api/v2/pokemon?offset=${i}0&limit=10`)
    //   let poke = await axios.all(response.data.results.map(async poke => {
    //     let pokeDetail = await axios(poke.url)
    //       return {  
    //         id: pokeDetail.data.id,
    //         name: pokeDetail.data.name,
    //         background_image: pokeDetail.data.sprites.other.dream_world.front_default,
    //         types: pokeDetail.data.types.map(t => t.type.name),
    //         attack: pokeDetail.data.stats[1].base_stat,
    //       }
    //   }))
    //   pokemonApi = [...pokemonApi,...poke]
    // }//--fin del for
      pokemonDB = await getAllPokeDB()
    // AllPokemon = [...pokemonDB,...pokemonApi]
    // return AllPokemon;
     return [...pokemonDB,...data]
  } catch (error) {
    return error
  }
}

const getAllTypes = async ()=>{//trae y cargas los tipos en BD
  // let response = await axios.get(`https://pokeapi.co/api/v2/type`);
  // let typesApi = response.data.results.map((genre) => {
  //   return genre.name;
  //   });
  // const typesDb = await CreateTypesDB(typesApi);//crea y llama los types desde la BD
  // return typesDb; 
  return dataType
};

const getDetail = async (name_id)=>{//trae 1 pokemon por ID o Nombre de la Api
  try {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name_id}`)
    let pokemon = {
      id: response.data.id,
      name: response.data.name,
      background_image: response.data.sprites.other['official-artwork'].front_default,
      hp: response.data.stats[0].base_stat,
      attack: response.data.stats[1].base_stat,
      defense: response.data.stats[2].base_stat,
      speed: response.data.stats[5].base_stat,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((t) =>{
        return{
          name : t.type.name
        }
      }),
    }
  return pokemon
  }catch(error){
    return 'Pokemon No Encontrado'
  }
  
}

const getByName = async (name)=>{ //busca por nombre en BD y Api
  let searchDB = await searchPokeDB(null,name)
  if(searchDB) return [{
  id:searchDB.id,
  name: searchDB.name,
  hp: searchDB.hp,
  attack: searchDB.attack,
  defense: searchDB.defense,
  speed: searchDB.speed,
  height: searchDB.height,
  weight: searchDB.weight,
  background_image: searchDB.background_image,
  createdInDb: searchDB.createdInDb,
  types: searchDB.types?.map(e=>e.name)}]
  //----------------------------------------------------------
  let searchApi = await getDetail(name) 
  return [{...searchApi,
    types: searchApi.types?.map(e=>e.name)}]
}

const getById = async (id)=>{//busca por ID en BD y Api
  if(Number(id)){
    return await getDetail(id)
  }else{
    return searchPokeDB(id,null)
  }
}

module.exports = {
    getAllPokemoms,
    getAllTypes,
    getByName,
    getById
}