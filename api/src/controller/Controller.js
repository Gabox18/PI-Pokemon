const axios = require('axios');
const {CreateTypesDB,searchPokeDB} = require('./ControllerDB.js')

const getAllPokemoms = async ()=>{//trae 40 pokemons de la Api
    //let allPokemons = [];
    //--------------------obtengo las url de los 1eros 40 pokemons-------------------
    //let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //let allUrlResponse = response.data.results.map((pokemon) => pokemon.url);
    //response = await axios.get(response.data.next)
    //allUrlResponse = allUrlResponse.concat(response.data.results.map((pokemon) => pokemon.url))
    //--------------------obtengo las url de los 1eros 40 pokemons-------------------

    // await axios.all(allUrlResponse.map((urlPokemonSubrequest) => axios.get(urlPokemonSubrequest))).then(
    //   (foundPokemons) => {
    //     foundPokemons.map((foundPokemon) => allPokemons.push({
    //       id: foundPokemon.data.id,
    //       name: foundPokemon.data.name,
    //       img: foundPokemon.data.sprites.other['official-artwork'].front_default,
    //       hp: foundPokemon.data.stats[0].base_stat,
    //       attack: foundPokemon.data.stats[1].base_stat,
    //       defense: foundPokemon.data.stats[2].base_stat,
    //       speed: foundPokemon.data.stats[5].base_stat,
    //       height: foundPokemon.data.height,
    //       weight: foundPokemon.data.weight,
    //       types: foundPokemon.data.types.map((t) => t.type.name),
    //     }));
    //   },
    // );
    
    //return allUrlResponse

    try {
        const apiPokemons = [];
        const pokemonRequest = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=25');
        const urlPokemonSubrequest = pokemonRequest.data.results.map((pokemon) => pokemon.url);
        // await axios.all(await urlPokemonSubrequest.map((urlPokemonSubrequest) => axios.get(urlPokemonSubrequest))).then(
        //   (foundPokemons) => {console.log(foundPokemons);
        //     foundPokemons.map((foundPokemon) => apiPokemons.push({
        //       id: foundPokemon.data.id,
        //       name: foundPokemon.data.name,
        //       img: foundPokemon.data.sprites.other['official-artwork'].front_default,
        //       hp: foundPokemon.data.stats[0].base_stat,
        //       attack: foundPokemon.data.stats[1].base_stat,
        //       defense: foundPokemon.data.stats[2].base_stat,
        //       speed: foundPokemon.data.stats[5].base_stat,
        //       height: foundPokemon.data.height,
        //       weight: foundPokemon.data.weight,
        //       createdInDb: false,
        //       types: foundPokemon.data.types.map((t) => t.type.name),
        //     }));
        //   },
        // )//.catch((foundPokemons)=>console.log(foundPokemons));
        return urlPokemonSubrequest;
      } catch (error) {
        console.log(error);
      }

}

const getAllTypes = async ()=>{//trae y cargas los tipos en BD
  let response = await axios.get(`https://pokeapi.co/api/v2/type`);
  let typesApi = response.data.results.map((genre) => {
    return genre.name;
    });
  const typesDb = await CreateTypesDB(typesApi);//crea y llama los types desde la BD
  return typesDb;
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
  if(searchDB.length!==0) return searchDB
  let searchApi = await getDetail(name) 
  return searchApi
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