import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";

export default class SearchBar extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired
    }

    render() {
        return( 
            <header className="Searchbar">
                <form className="SearchForm" onSubmit = {this.props.onSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <FaSearch size={18} />
                    </button>

                    <input
                    onChange = {this.props.onChange}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
                </form>
            </header>
        )
    }
}