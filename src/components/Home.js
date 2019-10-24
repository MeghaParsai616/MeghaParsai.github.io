import React, { Component } from 'react';
import './Home.css'
import { withRouter } from "react-router";
import PokemonCard from "./PokemonCard";
import { connect } from 'react-redux';
import * as PokemonListsAction from '../store/action/PokemonListsAction';
class Home extends Component {
    state = {
        searchedString: null,
        invalidInput: false,
    }

    componentDidMount() {
        this.props.getAllPokemons();
    }
    render() {
        console.log("this.props.Pokemon");
        console.log(this.props.Pokemon)
        return (
            <div className="container-fluid p-0">
                <div className="pokemon_heading">
                    <h1>Pokemon Home</h1>
                </div>

                <div className="pokemon_content">
                    <div className="input-group input_div">
                        <input
                            className="input_size"
                            type="text"
                            onChange={(event) => this.handleChange(event)}
                            placeholder="Search For Pokemon..."
                            aria-describedby="basic-addon2"
                            autoFocus
                        />
                        <div className="input-group-append">
                            <button className="search_button" type="submit" onClick={this.onSubmit}><i className="fa fa-search"></i></button>
                        </div>
                        {this.state.invalidInput && <div>Input must be alphabets and not empty</div>}
                    </div>
                    <div className="row">
                        <PokemonCard
                        pokemon = {this.props.Pokemon}
                        />
                    </div>
                </div>
            </div>

        );
    }
    onSubmit = (searchString) => {
        if (this.state.searchedString && (this.state.searchedString).match(/^[a-zA-Z]*$/)) {
            this.setState({ invalidInput: false })
            this.props.getSearchedName(this.state.searchedString)
            this.props.history.push("/pokemon-list");
        } else {
            this.setState({ invalidInput: true })
        }

    }

    handleChange = (event) => {
        let searchedString = event.target.value
        this.setState({ searchedString: searchedString })
    }

}

const mapStateToProps = state => {
    return {
        Pokemon: state.Pokemon.Pokemon
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPokemons: () => dispatch(PokemonListsAction.getAllPokemons()),
        getSearchedName: (searchedNames) => dispatch(PokemonListsAction.getSearchedName(searchedNames))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

