import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const PokemonDeatiles = (props) => {
    const [pokemon,setPokemon] = useState({
        img:'',
        type:'',
        id:''
    });


        useEffect(()=>{
            const name = props.match.params.name;
            axios.get(process.env.REACT_APP_URL_POKEMON+name)
            .then(res=>{
                // console.log(res.data);
                setPokemon({
                img:res.data.sprites.other["official-artwork"].front_default,
                type:res.data.types[0].type.name,
                id:res.data.id
            })}
            )
        },[])
    return (
        <>
                {!props.authUser.token ? (<Redirect to='/l' />) : (null)}
            <div className="flex justify-center bg-gray-200">
            <div className="text-center flex-center max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={pokemon.img ?(pokemon.img) :('http://marktan.us/pokemon/img/Item_0001.png')} alt={props.match.params.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.match.params.name}</div>
                <p className="text-gray-700 text-base">
                        id: {pokemon.id}
                </p>
                <p className="text-gray-700 text-base">
                        type: {pokemon.type}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <Link to={'/'} className="text-gray-700 text-center bg-red-400 px-4 py-2 m-2"><i className="fas fa-arrow-left"></i></Link>
            </div>
            </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      authUser: state.auth,
    }
}
export default connect(mapStateToProps)(PokemonDeatiles)
