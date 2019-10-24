import * as actionTypes from './ActionType';
import axios from 'axios';

export const getSearchedName= (searchedNames) => {
    return {
        type: actionTypes.GET_SEARCHED_NAME,
        searchedNames: searchedNames
    };
};

export const setAllPokemons = (allPokemons) => {
    return {
        type: actionTypes.SET_ALL_POKEMONS,
        allPokemon: allPokemons
    };
};

export const fetchAllPokemonsFailed = () => {
    return {
        type: actionTypes.FETCH_ALL_POKEMONS_FAILED

    };
};
export const setPokemonDetails = (pokemonDetails, imgUrl) => {
    return {
        type: actionTypes.GET_POKEMON_DETAILS,
        pokemonDetails: pokemonDetails,
        imgUrl : imgUrl
    };
}
export const getPokemonDetails = (pokeIndex, imgUrl) => {
        return dispatch => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}?limit=60`).then((response) => {
                dispatch(setPokemonDetails(response.data, imgUrl));
            }).catch(error => {
                dispatch(fetchAllPokemonsFailed());
            });
        };
}
export const getAllPokemons = () => {
    return dispatch => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=60').then((response) => {
            dispatch(setAllPokemons(response.data.results));
        }).catch(error => {
            dispatch(fetchAllPokemonsFailed());
        });
    };
};