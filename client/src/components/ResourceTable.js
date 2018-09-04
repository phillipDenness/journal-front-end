import React, { Component } from 'react';

export default class ResourceTable extends Component {
    constructor(props){
        super(props);
        this.state = {
        resources: []
        };
    }

    componentDidMount() {
        fetch('/resources')
        .then(res => res.json())
        .then(resources => this.setState({ resources }));
    }

    render() {
        return(
            <div>
            {this.state.resources.map(resource =>
                <div key={resource.resourceId}>{resource.name}</div>  
            )}
            </div>
        );
    }
}

  
  
  