import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    constructor(props){
      super(props);
      this.state = {placeholder: []};
    }

    render(){
        return(
            <div>
            <header className="App-header">
            <h1 className="App-title">{this.props.text}</h1>
            </header>
            </div>
        );
    }
}

export default Header;

