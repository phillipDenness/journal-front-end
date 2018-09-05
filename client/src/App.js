import React, { Component } from 'react';

import Home from './components/Home';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {placeholder: []};
  }

  render() {
    return (
      <Router>
        <div class="container">
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}


