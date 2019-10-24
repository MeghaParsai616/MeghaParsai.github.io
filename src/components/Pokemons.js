import React, { Component } from 'react'
import './Home.css'
import { connect } from 'react-redux';
import * as PokemonListsAction from '../store/action/PokemonListsAction';

class Pokemons extends Component {
    state = {
            name: null, //this.props.name,
            imgUrl: null ,// this.props.url,
            pokeIndex: null,
    }

    componentDidMount() {
        console.log("sub class pokemon");
        console.log(this.props.P)
    const {name, url} = this.props.Pokemon;
    const pokeIndex = (url).split('/')[url.split('/').length-2];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex}.png`;
    
    this.setState({
        name,
        imgUrl,
        pokeIndex
    })
   }

   
   getSelectedPokemon = (pokeIndex, imgUrl) => {
    this.props.getPokemonDetails(pokeIndex, imgUrl)
    this.props.history.push("/pokemon-details")
} 
    render() {

        return (
            <div key={this.state.pokeIndex}> 
                <button 
                  className="pokemons__item"
                  onClick={(pokeIndex, imgUrl)=> this.getSelectedPokemon(this.state.pokeIndex, this.state.imgUrl)}
                  style={{
                    backgroundImage: `url(${this.state.imgUrl})`
                  }}
                  
                  >
                    <h6 className="pokemon_index">{this.props.index}</h6>
                    <p  className="pokemon_title">{this.state.name}</p>
                </button>
            
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getPokemonDetails: (pokeIndex, imgUrl) => dispatch(PokemonListsAction.getPokemonDetails(pokeIndex, imgUrl))
    }
}
export default connect(null, mapDispatchToProps)(Pokemons);