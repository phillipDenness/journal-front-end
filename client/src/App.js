import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {resources: []};
  }

  componentDidMount() {
    fetch('/resources')
      .then(res => res.json())
      .then(resources => this.setState({ resources }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Resource List</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.resources.map(resource =>
          <div key={resource.resourceId}>{resource.name}</div>
        )}
      </div>
    );
  }
}

export default App;

