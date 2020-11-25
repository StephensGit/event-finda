import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchEvents(this.state.text);
        this.setState({ text: '' })
    }
    // This method will fire every time a user inserts a character in the search bar
    // Using [] brackets to tarhet that specific event in case there's mutltiple onChange
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value);
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form" >
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Events..." 
                    value={text} 
                    onChange={this.onChange}
                /> 
                <input 
                    type="submit" 
                    value="search" 
                    className="btn btn-dark btn-block" 
                /> 
                </form>
                {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearEvents}>Clear</button>}
            </div>
        )
    }

    static propTypes = {
        searchEvents: PropTypes.func.isRequired,
        clearEvents: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }
}

export default Search
