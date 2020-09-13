import React, {useEffect,useState} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import PokemonSummary from './PokemonSummary';

const PokemonsList = ({getPokemons, pokemons}) => {
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    useEffect(() => {
       getPokemons(url);
    }, [])
    return (
        <>
            <div className="grid grid-cols-3 bg-gray-200 place-content-center ">
                {console.log(pokemons)}
                { pokemons.results && pokemons.results.map((pokemon,index) => {
        return (
          <div key={index}>
            <PokemonSummary pokemon={pokemon} />
          </div>
        )
      }) }  
                
            </div>
            <div className="flex justify-center bg-gray-200">
            <div >
            <button  className="text-gray-700 text-center bg-red-400 px-4 py-2 m-2" onClick={()=>getPokemons(pokemons.previous)}>back</button>
 
            <button className="text-gray-700 text-center bg-red-400 px-4 py-2 m-2" onClick={()=>getPokemons(pokemons.next)}>Next</button>
            </div>
            </div>
            </>
    )
}

const mapStateToProps = (state) => {
    return {
      pokemons: state.pokemons,
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        getPokemons (url) {
            axios.get(url)
               .then((res) => {
                dispatch({
                    type: 'SUCCESS',
                    payload:res.data
                })
              }
               ).catch((err)=> {
                dispatch({
                    type: 'LOGIN_ERROR',
             
                })
               })
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PokemonsList)
