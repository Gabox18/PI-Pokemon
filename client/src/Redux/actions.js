import axios from "axios";

export const GET_ALL_POKES = 'GET_ALL_POKES'
export const GET_TYPES = 'GET_TYPES'
export const FILTER_TYPES = 'FILTER_TYPES'
export const FILTER_DB = 'FILTER_DB'
export const ORDER_POKES_BY = 'ORDER_POKES_BY'

export const getAllPokes = () => {
    return async function (dispatch) {
      return fetch('http://localhost:3001/pokemons')
      .then((res)=>res.json())
      .then((res_json) =>{
        dispatch({type: GET_ALL_POKES,
                  payload: res_json})
      })
    };
  };

  export const getTypes = () => {
    return async function(dispatch){
        let response = await axios.get(`http://localhost:3001/types`)
        return dispatch({
          type: GET_TYPES,
          payload: response.data
        })
    }
  }

  export const filterTypes = (type) =>{
    return{
      type: FILTER_TYPES,
      payload : type
    }
  }
  
  export const filterDb = (pokeDB) =>{
    return{
      type: FILTER_DB,
      payload : pokeDB
    }
  }

  export const orderPokesBy = (typeOrder) =>{
    return{
      type : ORDER_POKES_BY,
      payload : typeOrder
    }
  }