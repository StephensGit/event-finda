import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
    }
    // This method will fire every time a user inserts a character in the search bar
    // Using [] brackets to tarhet that specific event in case there's mutltiple onChange
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form" >
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={this.state.text} 
                    onChange={this.onChange}
                /> 
                <input 
                    type="submit" 
                    value="search" 
                    className="btn btn-dark btn-block" 
                /> 
                </form>
            </div>
        )
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }
}

export default Search
