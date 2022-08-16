const axios = require('axios');
const {CreateTypesDB,searchPokeDB} = require('./ControllerDB.js')
const URL_API_POKEMON = 'https://pokeapi.co/api/v2/pokemon?limit=5';

const getAllPokemoms = async ()=>{//trae 40 pokemons de la Api
  try {
    const poke1 = await axios("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10")
    //const poke2 = await axios(poke1.data.next)
    //const pokeData = poke1.data.results.concat(poke2.data.results)
        const pokemon = await Promise.all(poke1.data.results.map(async poke => {
            let pDetail = await axios(poke.url)
            console.log(pDetail,'----pDetail------')
              return {  
                id: pDetail.data.id,
                  name: pDetail.data.name,
                  image: pDetail.data.sprites.other.home.front_default,
                  types: pDetail.data.types.map(t => t.type.name),
                  hp: pDetail.data.stats[0].base_stat,
                  attack: pDetail.data.stats[1].base_stat,
                  defense: pDetail.data.stats[2].base_stat,
                  speed: pDetail.data.stats[5].base_stat,
                  height: pDetail.data.height, 
                  weight: pDetail.data.weight
            }
        }))
        console.log(pokemon,'----pokemon')
        return pokemon;
    
  } catch (error) {
    return error
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


// const objPokeApi = (poke) => {
//   const objPokeapi =
//   {
//       id: poke.id,
//       name: poke.name,
//       life: poke.stats[0].base_stat,
//       attack: poke.stats[1].base_stat,
//       defense: poke.stats[2].base_stat,
//       speed: poke.stats[5].base_stat,
//       height: poke.height,
//       weight: poke.weight,
//       sprite: poke.sprites.other.dream_world.front_default,
//       types: poke.types.length < 2 ? [{ name: poke.types[0].type.name}] : [{ name: poke.types[0].type.name}, { name: poke.types[1].type.name}]
//   };
//   return objPokeapi
// };

module.exports = {
    getAllPokemoms,
    getAllTypes,
    getByName,
    getById
}