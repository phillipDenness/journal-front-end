import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';
import config from '../config';
import Table from './Table';
import Loading from './Loading';

export default class Frameworks extends Component {
    constructor(props){
        super(props);
        this.state = {
            frameworks: []
        };
        this.buildUri = this.buildUri.bind(this);
        this.format = this.format.bind(this);
        this.getAllFrameworks = this.getAllFrameworks.bind(this);
    }

    componentDidMount() {
        this.getAllFrameworks();
    }

    buildUri(path) {
        return config.api.protocol + '://' + config.api.host + ':' + config.api.port + path; 
    }

    format(frame){
        for(let i=0;i<frame.length;i++){
            frame[i].language = frame[i].language.name;
        }
        return frame;
    }

    getAllFrameworks() {
        var options = {
            uri: this.buildUri(this.props.location.pathname),
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(frame => {
                let formattedFrame = this.format(frame);
                return formattedFrame;
            })
            .then(frame => {
                this.setState({
                    frameworks: frame
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        let headers = ['Name', 'Language'];
        return(
            <div className="container">
                <Navigation/>
                {this.state.frameworks.length !== 0 ? <Table data={this.state.frameworks} headers={headers}/>:<Loading text="Loading Frameworks.js . . ."/>}
            </div>
        );
    }
}