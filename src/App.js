import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import Events from './components/events/Events';
import Search from './components/events/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';

import './App.css';

export class App extends Component {

  state = {
    events: [],
    loading: false,
    alert: null
  }

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

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } })

    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000)
  }

  render() {
    const { events, loading} = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search 
            searchEvents={this.searchEvents} 
            clearEvents={this.clearEvents} 
            showClear={events.length > 0 ? true : false}
            setAlert={this.setAlert}
            />
          <Events loading={loading} events={events} />
        </div>
      </div>
    )
  }
}

export default App
