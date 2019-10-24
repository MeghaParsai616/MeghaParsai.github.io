import React, { Component } from 'react';
import './Home.css'

export class PokemonCard extends Component {
    state = {
        randomPokemon: null,
        randomIndex: null
    }
    componentDidUpdate(preProps) {
        
        console.log("calculating date");
        console.log(new Date().getHours() )
        const random = Math.ceil(Math.random() * (this.props.pokemon.length));
        const value = this.props.pokemon[random];
        if(preProps.pokemon !== this.props.pokemon){
            this.setState({ randomPokemon: value, randomIndex: random });
        }
       
    }
    
    render() {
        console.log("this.props.pokemon");
        console.log(this.props.pokemon);
        return (this.state.randomPokemon ? (
            <div className="col-5 pokemon-container">
                <div className="pokemon-card">
                    <img className=" img-fluid pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.randomIndex}.png`} alt="alt text" />
                </div>
                <div className="pokemon-name">
                    {this.state.randomPokemon.name}
                </div>
            </div>): 
            <div>Loading .......</div>
        );
    }
}


export default PokemonCard