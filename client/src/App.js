import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SubHeading from './components/SubHeading';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {placeholder: []};
  }

  render() {
    return (
      <div className="App">
        <Header text="Jack's Journal App"/>
        <SubHeading text="To get started, edit <code>src/App.js</code> and save to reload."/>
      </div>
    );
  }
}

// componentDidMount() {
//   fetch('/resources')
//     .then(res => res.json())
//     .then(resources => this.setState({ resources }));
// }

// {this.state.resources.map(resource =>
//   <div key={resource.resourceId}>{resource.name}</div>
// )}

export default App;

