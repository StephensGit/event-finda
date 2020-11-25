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

  searchEvents = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=HDXOsLFjKv0z0sSyeUhUh1nLe0TB7M7A&city=${text}`);

    this.setState({ events: res.data._embedded.events, loading: false });
    // console.log(text);
  }

  // Clear the events from the state
  clearEvents = () => {
    this.setState({ events: [], loading: false })
  }

  render() {
    const { events, loading} = this.state;
    return (
      <div>
        <Navbar />
        <Search 
          searchEvents={this.searchEvents} 
          clearEvents={this.clearEvents} 
          showClear={events.length > 0 ? true : false}
          />
        <Events loading={loading} events={events} />
      </div>
    )
  }
}

export default App
