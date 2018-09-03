import React, { Component } from 'react';
import Header from './components/Header';
import SubHeading from './components/SubHeading';
import Navigation from './components/Navigation';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {placeholder: []};
  }

  render() {
    return (
      <div>
        <Navigation />
        <div class="container">
          <Header text="Jack's Journal App"/>
          <SubHeading text="This is a subtitle"/>
        </div>
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


