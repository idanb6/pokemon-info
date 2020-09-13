import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/layers/Home'
import Login from './components/auth/Login'
import PokemonDeatiles from './components/pokemon/PokemonDeatiles';
import Navbar from './components/layers/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="">
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/l' component={Login} />
      <Route  path='/pokemon/:name' component={PokemonDeatiles} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
