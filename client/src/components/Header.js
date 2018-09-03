import React, { Component } from 'react';

class Header extends Component {
    constructor(props){
      super(props);
      this.state = {placeholder: []};
    }

    render(){
        return(
            <div>
            <header>
            <h1>{this.props.text}</h1>
            </header>
            </div>
        );
    }
}

export default Header;

