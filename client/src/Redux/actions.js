import axios from "axios";

export const GET_ALL_POKES = 'GET_ALL_POKES'
export const GET_TYPES = 'GET_TYPES'

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