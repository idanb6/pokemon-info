import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const PokemonDeatiles = (props) => {
    const [pokemon,setPokemon] = useState({
        img:'',
        type:''
    });


        useEffect(()=>{
            console.log(props)
            axios.get(process.env.REACT_APP_URL_POKEMON+props.match.params.name)
            .then(res=>{
                console.log(res.data);
                setPokemon({
                img:res.data.sprites.other["official-artwork"].front_default,
                type:res.data.types[0].type.name,

            })}
            )
        },[])
    return (
            <div className="flex justify-center bg-gray-200">
            <div className="text-center flex-center max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={pokemon.img} alt={props.match.params.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.match.params.name}</div>
                <p className="text-gray-700 text-base">
                        type:{pokemon.type}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <Link to={'/'}>back</Link>
            </div>
            </div>
            </div>

           


    )
}

export default PokemonDeatiles
