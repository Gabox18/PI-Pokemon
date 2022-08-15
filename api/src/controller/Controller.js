const axios = require('axios');
const {typesDB} = require('./ControllerDB.js')

const getAllPokemoms = async()=>{
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
        const pokemonRequest = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=58');
        const urlPokemonSubrequest = pokemonRequest.data.results.map((pokemon) => pokemon.url);
        // console.log(urlPokemonSubrequest);
        await axios.all(await urlPokemonSubrequest.map((urlPokemonSubrequest) => axios.get(urlPokemonSubrequest))).then(
          (foundPokemons) => {console.log(foundPokemons);
            // foundPokemons.map((foundPokemon) => apiPokemons.push({
            //   id: foundPokemon.data.id,
            //   name: foundPokemon.data.name,
            //   img: foundPokemon.data.sprites.other['official-artwork'].front_default,
            //   hp: foundPokemon.data.stats[0].base_stat,
            //   attack: foundPokemon.data.stats[1].base_stat,
            //   defense: foundPokemon.data.stats[2].base_stat,
            //   speed: foundPokemon.data.stats[5].base_stat,
            //   height: foundPokemon.data.height,
            //   weight: foundPokemon.data.weight,
            //   createdInDb: false,
            //   types: foundPokemon.data.types.map((t) => t.type.name),
            // }));
          },
        )//.catch((foundPokemons)=>console.log(foundPokemons));
        return apiPokemons;
      } catch (error) {
        console.log(error);
      }

}

const getAllTypes = async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/type`);
  let types = response.data.results.map((genre) => {
    return genre.name;
  });
  const allTypes = await typesDB(types);//crea y llama los types desde la BD
  return allTypes;
};

module.exports = {
    getAllPokemoms,
    getAllTypes
}