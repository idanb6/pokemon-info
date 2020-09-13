import React from 'react'
import { Link } from 'react-router-dom'

const PokemonSummary = ({pokemon}) => {
    return (
            
            <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                <p>{pokemon.name}</p>
                <Link to={'/pokemon/'+pokemon.name}>more</Link>
            </div>

        
    )
}

export default PokemonSummary
