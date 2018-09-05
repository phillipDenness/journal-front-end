import React, { Component } from 'react';
import Navigation from './Navigation';
import rp from 'request-promise';
import config from '../config';

class Table extends React.Component {
    render() {
        return(
            <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Url</th>
                    <th scope="col">Framework</th>
                    <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            </div>   
        );
    }
}

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
        return config.api.protocol + '://' + config.api.host + ':' + config.api.post + '/' + path; 
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