import React, { Component } from 'react';

class SubHeading extends Component {
    constructor(props){
      super(props);
      this.state = {placeholder: []};
    }

    render(){
        return(
        <div>
        <p>{this.props.text}</p>
        </div>
        );
    }
}

export default SubHeading;

