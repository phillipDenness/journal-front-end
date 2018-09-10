import React, { Component } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import SubHeading from './SubHeading';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <Header text="Jack's Journal App"/>
                <SubHeading text="Talks to journal API and displays information in HTML"/>
            </div>
        );
    }
}