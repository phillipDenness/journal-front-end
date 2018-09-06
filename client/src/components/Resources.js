import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';
import config from '../config';
import Table from './Table';

export default class Resources extends Component {
    constructor(props){
        super(props);
        this.state = {
            resources: []
        };
    }

    componentDidMount() {
        this.getAllResources();
    }

    buildUri(path) {
        return config.api.protocol + '://' + config.api.host + ':' + config.api.port + '/' + path; 
    }

    setNames(res){
        for(let i=0;i<res.length;i++){
            res[i].framework = res[i].framework.name;
            res[i].language = res[i].language.name;
        }
        return res;
    }

    getAllResources() {
        var options = {
            uri: this.buildUri(this.props.location.pathname),
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(res => {
                this.setNames(res);
                console.log(res);
                this.setState({
                    resources: res
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
    const resourceHeaders = ['Resource','Url','Framework','Language'];
        return(
            <div className="container">
                <Navigation/>
                <Table json={this.state.resources}
                       columns={resourceHeaders}/>
            </div>
        );
    }
}