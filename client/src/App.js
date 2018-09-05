import React, { Component } from 'react';

import Home from './components/Home';
import Resources from './components/Resources';
import Frameworks from './components/Frameworks';
import Languages from './components/Languages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/frameworks" component={Frameworks} />
          <Route exact path="/languages" component={Languages} />
        </div>
      </Router>
    );
  }
}


