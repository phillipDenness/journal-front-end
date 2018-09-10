import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';

export default class Languages extends Component {
    constructor(props){
        super(props);
        this.state = {
            languages: []
        };
    }

    componentDidMount() {
        this.getAllLanguages();
    }

    getAllLanguages() {
        var options = {
            uri: 'http://localhost:8080/languages',
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(lang => {
            console.log(lang);
            this.setState({
                languages: lang
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
            {this.state.languages.map(l =>
                <div key={l.languageId}>
                {l.name}
                </div>  
            )}
            </div>
        );
    }
}