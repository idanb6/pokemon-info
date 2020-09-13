  
import authReducer from './authReducer'
import pokemonReducer from './pokemonReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  pokemons: pokemonReducer
});

export default rootReducer