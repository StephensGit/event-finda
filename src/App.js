import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import Events from './components/events/Events';
import Search from './components/events/Search'
import axios from 'axios';

import './App.css';

export class App extends Component {

  state = {
    events: [],
    loading: false
  }

  // componentDidMount() {
  //   axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=B0JQHemR4Q569W9GcjHfhygRBRU3RvrL&city=Dublin').then(res => console.log(res.data));
  // }
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=HDXOsLFjKv0z0sSyeUhUh1nLe0TB7M7A&city=Dublin`);
  //   console.log(res.data._embedded.events);

  //   this.setState({ events: res.data._embedded.events, loading: false });

  // }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    
    const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=HDXOsLFjKv0z0sSyeUhUh1nLe0TB7M7A&city=${text}`);

    this.setState({ events: res.data._embedded.events, loading: false });
    // console.log(text);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search searchUsers={this.searchUsers}/>
        <Events loading={this.state.loading} events={this.state.events} />
      </div>
    )
  }
}

export default App
