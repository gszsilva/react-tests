import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './config/router';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        {routes()}
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'));
