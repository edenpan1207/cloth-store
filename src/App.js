import React, { Component } from 'react';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const header = () => (
  <div>this is header</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/header" component={header} />
        </Switch>
      </div>
    );
  }
}

export default App;
