import React from 'react'
import PokemonsList from '../pokemon/PokemonsList'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const Home = ({authUser}) => {
    return (
        <div>

            {!authUser.token ? (<Redirect to='/l' />) : (<PokemonsList />)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      authUser: state.auth,
    }
  }
export default connect(mapStateToProps)(Home)
