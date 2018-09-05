import React, { Component } from 'react';
import rp from 'request-promise';

export default class ResourceTable extends Component {
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
          }
        };
       
        rp(options)
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
        return(
            <div>
            <Navigation/>
            {this.state.resources.map(resource =>
                <div key={resource.resourceId}>{resource.name}</div>  
            )}
            </div>
        );
    }
}

  
  
  