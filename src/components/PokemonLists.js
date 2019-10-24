import React, { Component } from 'react'
import './Home.css'
import { connect } from 'react-redux';
import Pokemons from "./Pokemons";

class PokemonLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Pokemon: null,
            PokemonsList: null,
            noDataFound: false,
        }
    }

    componentDidMount() {
        this.handleSearch();
    }
 
    handleSearch = event => {
        if (this.props.Pokemon && this.props.searchedNames) {
            const PokemonsList = this.props.Pokemon.filter(
                pokeaName => {
                    return (pokeaName.name).includes(this.props.searchedNames)
                }
            );
            if(PokemonsList.length === 0){
                this.setState({ noDataFound: true });
            }
            this.setState({ PokemonsList: PokemonsList });
        }
        else{
            this.setState({noDataFound : true})
        }

    }
    render() {
        return (
            <div className="container">
                <div className="row ">
                    {this.state.PokemonsList && 
                        this.state.PokemonsList.map((pokeaName, index) => {
                            return (
                                <Pokemons 
                                    Pokemon={pokeaName} 
                                    history={this.props.history} 
                                    key={index}
                                    index= {index+1} />
                            );
                        }
                        )}
                        { this.state.noDataFound &&
                            <div>No data Found for the Serach result</div> 

                        }
            
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Pokemon: state.Pokemon.Pokemon,
        searchedNames: state.Pokemon.searchedNames
    };
}

export default connect(mapStateToProps, null)(PokemonLists)