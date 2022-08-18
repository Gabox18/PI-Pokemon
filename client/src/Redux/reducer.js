import {GET_ALL_POKES, GET_TYPES} from './actions.js'

const initialState = {
    Pokes: [],
    PokesCopy: [],
    pokeDetail: {},
    AllTypes:[]

  };
  
  const rootReducer = (state = initialState, action) => {
    
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

      default:
        return { ...state };
    }
  };
  
  export default rootReducer;