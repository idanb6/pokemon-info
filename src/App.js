import React from 'react'
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
      {/* <Route exact path='/' >
      {!userData ? <Redirect to="/l" /> : (<><Home /></>)}
      </Route> */}
      <Route exact path='/' component={Home} />
      <Route exact  path='/pokemon/:name' component={PokemonDeatiles} />
      <Route  path='/l' component={Login} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
