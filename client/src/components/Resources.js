import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';
import config from '../config';
import Table from './Table';
import Loading from './Loading';

export default class Resources extends Component {
    constructor(props){
        super(props);
        this.state = {
            resources: []
        };
        this.buildUri = this.buildUri.bind(this);
        this.format = this.format.bind(this);
        this.getAllResources = this.getAllResources.bind(this);
    }

    componentDidMount(){
        this.getAllResources();
    }

    buildUri(path) {
        return config.api.protocol + '://' + config.api.host + ':' + config.api.port + path; 
    }

    format(res){
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
                let formattedRes = this.format(res);
                return formattedRes;
            })
            .then(res => {
                this.setState({
                    resources: res
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        let headers = ['Resources','Url','Framework','Language'];
        return(
            <div className="container">
                <Navigation/>
                {this.state.resources.length !== 0 ? <Table data={this.state.resources} headers={headers}/>:<Loading text="Loading Resource.js . . ."/>}
            </div>
        );
    }
}