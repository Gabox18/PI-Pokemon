import {GET_ALL_POKES, GET_TYPES,FILTER_TYPES,FILTER_DB,ORDER_POKES_BY} from './actions.js'
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

      case FILTER_TYPES:
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

      default:
        return { ...state };
    }
  };
  
  export default rootReducer;