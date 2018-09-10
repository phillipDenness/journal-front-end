import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';
import config from '../config';
import Table from './Table';
import Loading from './Loading';

export default class Languages extends Component {
    constructor(props){
        super(props);
        this.state = {
            languages: []
        };
        this.buildUri = this.buildUri.bind(this);
        this.getAllLanguages = this.getAllLanguages.bind(this);
    }

    componentDidMount() {
        this.getAllLanguages();
    }

    buildUri(path) {
        return config.api.protocol + '://' + config.api.host + ':' + config.api.port + path; 
    }

    getAllLanguages() {
        var options = {
            uri: this.buildUri(this.props.location.pathname),
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(lang => {
                this.setState({
                    languages: lang
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        let headers = ['Name'];
        return(
            <div className="container">
            <Navigation/>
            {this.state.languages.length !== 0 ? <Table data={this.state.languages} headers={headers}/>:<Loading text="Loading Languages.js . . ."/>}
            </div>
        );
    }
}