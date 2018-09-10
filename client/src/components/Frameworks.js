import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';

export default class Frameworks extends Component {
    constructor(props){
        super(props);
        this.state = {
            frameworks: []
        };
    }

    componentDidMount() {
        this.getAllFrameworks();
    }

    getAllFrameworks() {
        var options = {
            uri: 'http://localhost:8080/frameworks',
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(frame => {
            console.log(frame);
            this.setState({
                frameworks: frame
            });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return(
            <div className="container">
            <Navigation/>
            {this.state.frameworks.map(f =>
                <div key={f.frameworkId}>
                {f.name} {f.language.name}
                </div>  
            )}
            </div>
        );
    }
}