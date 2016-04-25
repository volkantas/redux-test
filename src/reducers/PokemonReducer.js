import {LIST_POKEMON, GET_POKEMON} from 'constants/ActionTypes'

const INITIAL_STATE = {
  all: [],
  selected: ""
}

export default function PokemonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        selected: action.payload.data
      }
    case LIST_POKEMON:
      return {
        ...state,
        all: action.payload.data.results
      }
    default:
      return state
  }
}
