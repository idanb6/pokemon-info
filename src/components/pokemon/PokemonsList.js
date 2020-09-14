import React, {useEffect} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'


import PokemonSummary from './PokemonSummary';

const PokemonsList = ({getPokemons, pokemons}) => {
    useEffect(() => {
        const url='https://pokeapi.co/api/v2/pokemon/'
        if(window.localStorage.getItem('url')===null){
            localStorage.setItem('url',url);
        }
       getPokemons(window.localStorage.getItem('url'));
    }, [])
    const handlerUrl = url => {
        getPokemons(url);
    }
    return (
        <>
            <div className="grid grid-cols-3 bg-gray-200 place-content-center ">
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
            {!pokemons.previous ? null : (
                <>
                <button  className="text-gray-700 text-center bg-red-200 px-4 py-2 m-2" onClick={()=>handlerUrl('https://pokeapi.co/api/v2/pokemon/')}><i className="fas fa-angle-left"></i></button>
                <button  className="text-gray-700 text-center bg-red-400 px-4 py-2 m-2" onClick={()=>handlerUrl(pokemons.previous)}>Previous</button>
                
                </>
            )
             }
              {!pokemons.next ? null : (
                <>
            <button className="text-gray-700 text-center bg-red-400 px-4 py-2 m-2" onClick={()=>handlerUrl(pokemons.next)}>Next</button>
            <button className="text-gray-700 text-center bg-red-200 px-4 py-2 m-2" onClick={()=>handlerUrl('https://pokeapi.co/api/v2/pokemon/?offset='+pokemons.count+'&limit=20')}><i className="fas fa-angle-right"></i></button>
                </>
                 )
                }
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
            localStorage.setItem('url',url);
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
