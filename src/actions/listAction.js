import axios from 'axios'
import {LIST_POKEMON, GET_POKEMON, SEARCH_POKEMON} from 'constants/ActionTypes';

const API = 'http://pokeapi.co/api/v2/pokemon/'

export function ListPokemon() {
  const request = axios.get(`${API}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {}
  })
  return {
    type: LIST_POKEMON,
    payload: request
  }
}

export function GetPokemon(id) {
  const request = axios.get(`${API}${id}/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {}
  })
  return {
    type: GET_POKEMON,
    payload: request
  }
}
