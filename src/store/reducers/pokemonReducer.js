
const initState = {
  pokemons: [

    ]
  }
  
  const pokemonReducer = (state = initState, action) => {
    switch (action.type) {
      case 'SUCCESS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default pokemonReducer;