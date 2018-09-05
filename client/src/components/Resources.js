import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';

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

    getAllResources() {
        var options = {
            uri: 'http://localhost:8080/resources',
            headers: {
            'Content-Type': 'application/json'
            },
            json: true
        };
        
        rp(options)
            .then(res => {
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
        return(
            <div className="container">
            <Navigation/>
            {this.state.resources.map(r =>
                <div key={r.resourceId}>
                {r.name} {r.url} {r.framework.name} {r.language.name}
                </div>  
            )}
            </div>
        );
    }
}