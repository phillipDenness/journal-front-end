import React, { Component } from 'react';
import '../App.css';

class SubHeading extends Component {
    constructor(props){
      super(props);
      this.state = {placeholder: []};
    }

    render(){
        return(
        <div>
        <p className="App-intro">{this.props.text}</p>
        </div>
        );
    }
}

export default SubHeading;

