import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import PokemonReducer from './PokemonReducer'

export default combineReducers({
  routing: routerReducer,
  pokemons: PokemonReducer,
  form: formReducer
})
