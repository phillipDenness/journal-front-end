import React, { Component } from 'react';

export default class Loading extends Component{
    render() {
        return(
            <div>{this.props.text}</div>
        );
    }
}