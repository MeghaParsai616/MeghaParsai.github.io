import React, { PureComponent } from 'react';
import './Home.css'
import { withRouter } from "react-router";
import { connect } from "react-redux"

class PokemonDetails extends PureComponent {
    state = {
        pokemonDetails: null
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.pokemonDetails)
        if (prevProps.PokemonDetails !== this.props.pokemonDetails) { }
        this.setState({ pokemonDetails: this.props.pokemonDetails });
    }

    render() {
        return (
            this.state.pokemonDetails ?
                <div className="container-fluid">
                    <div className="row">
                        <button
                            className="pokemons__item"
                            style={{
                                backgroundImage: `url(${this.props.imgUrl})`
                            }}

                        />
                    </div>
                    <div><label>Name: </label>{this.state.pokemonDetails.species.name}</div>
                    <div className="w-100">Attributes...</div>
                    <div className="row p-2">
                        <div className="col-2">
                            <div classname="">Abilities:
                               <ul className="abilities">
                                    {this.state.pokemonDetails.abilities.map((abilities) => (
                                        <li>{abilities.ability.name}</li>
                                    ))

                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div classname="">Types:
                                <ul className="abilities">
                                    {this.state.pokemonDetails.types.map((Types) => (
                                        <li>{Types.type.name}</li>
                                    ))

                                    }
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div> :
                <div>Loding...</div>
        );
    }

}
const mapStateToProps = state => {
    return {
        pokemonDetails: state.Pokemon.pokemonDetails,
        imgUrl: state.Pokemon.imgUrl
    };
}

export default connect(mapStateToProps, null)(withRouter(PokemonDetails));

