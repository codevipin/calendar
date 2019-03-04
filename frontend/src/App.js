import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuAppBar from './components/MenuAppBar';
import CalendarWeek from './components/CalendarWeek';
import EventBox from './components/EventBox';
import AddEvent from './components/AddEvent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar/>
        <div className="header-container">
          <AddEvent />
          <CalendarWeek />
        </div>
        <EventBox/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
