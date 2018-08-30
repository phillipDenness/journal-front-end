import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {resources: []}

  componentDidMount() {
    fetch('/resources')
      .then(res => res.json())
      .then(resources => this.setState({ resources }));
  }

  render() {
    return (
      <div className="App">
        <h1>Resource List</h1>
        {this.state.resources.map(resource =>
          <div key={resource.resourceId}>{resource.name}</div>
        )}
      </div>
    );
  }
}

export default App;
