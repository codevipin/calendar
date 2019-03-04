import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import MenuAppBar from './components/MenuAppBar';
import CalendarWeek from './components/CalendarWeek';
import EventBox from './components/EventBox';
import AddEvent from './components/AddEvent';
import SelectMonth from './components/SelectMonth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar/>
        <Grid container className="header-container">
          <Grid item xs={6}>
            <AddEvent />
          </Grid>
          <Grid item xs={6} align="left">
            <SelectMonth />
          </Grid>
          <CalendarWeek />
        </Grid>
        <EventBox/>
      </div>
    );
  }
}

export default App;
