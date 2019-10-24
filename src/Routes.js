import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import PokemonLists from './components/PokemonLists';
import PokemonDetails from './components/PokemonDetails';
 class Routes extends Component {
   //  path="/"  redirects to home page
render(){
    return(
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route exact={true} path="/pokemon-list" component={PokemonLists}></Route>
            <Route exact={true} path="/pokemon-details" component={PokemonDetails}></Route>
            <Route path="*" render={()=> (<h1>Page Not Found</h1>)}></Route>
        </Switch>
    );
}
}
export default Routes;