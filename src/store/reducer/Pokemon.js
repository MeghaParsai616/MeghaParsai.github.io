import * as ActionType from '../action/ActionType';


let initialState = {
 //  SerachedNames : null,
 Pokemon: null,
  error: null,
  searchedNames: null,
  pokemonDetails: null,
  imgUrl: null,
}

const Pokemon = (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SET_ALL_POKEMONS:
        return  { // Object.assign({}, state, { Pokemon: action.allPokemon}  
         ...state,
         Pokemon: action.allPokemon,
         }
         case ActionType.GET_SEARCHED_NAME:
          return {
              ...state,
              searchedNames: action.searchedNames
          }
          case ActionType.GET_POKEMON_DETAILS:
        return  {
         ...state,
         pokemonDetails: action.pokemonDetails,
         imgUrl : action.imgUrl
         }
      case ActionType.FETCH_ALL_POKEMONS_FAILED:
        return {
            ...state,
           error: true
        }
      default:
        return state
    }
  }
  
  export default Pokemon