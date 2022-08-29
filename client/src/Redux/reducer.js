import {GET_ALL_POKES, GET_TYPES,FILTER_TYPES,FILTER_DB,ORDER_POKES_BY
  ,CREATE_POKE,POKE_DETAILS,CLEAR_DETAILS,SEARCH_BY_NAME} from './actions.js'
  
import ordering from '../Funciones_js/Ordenamiento.js'

const initialState = {
    Pokes: [],
    PokesCopy: [],
    pokeDetail: {},
    AllTypes:[]

  };
  
  const rootReducer = (state = initialState, action) => {
    const auxAllPokes = state.PokesCopy;

    switch (action.type) {
      case GET_ALL_POKES:
        return {
          ...state,
          Pokes: action.payload,
          PokesCopy: action.payload,
        };

      case GET_TYPES:
        return{
          ...state,
          AllTypes: action.payload
        }

      case POKE_DETAILS:
        return{
          ...state,
          pokeDetail : action.payload
        }

      case CLEAR_DETAILS:
        return{
          ...state,
          pokeDetail : {}
        }

      case FILTER_TYPES:
        console.log(auxAllPokes)
        return {
          ...state,
          Pokes: action.payload ==='Filtrar por'
          ? state.PokesCopy
          : auxAllPokes.filter((e) => e.types?.includes(action.payload))
        };
  
      case FILTER_DB:
        let dbFilter = auxAllPokes.filter((e) => e.createdInDb === true);
        return {
          ...state,
          Pokes: dbFilter,
        };

      case ORDER_POKES_BY:
        return {
          ...state,
          Pokes: ordering(state.Pokes, action.payload).map((e) => e),
        };

      case SEARCH_BY_NAME:
        return{
          ...state,
          Pokes: action.payload
        }

      case CREATE_POKE :
        return{
          ...state
        }

      default:
        return { ...state };
    }
  };
  
  export default rootReducer;