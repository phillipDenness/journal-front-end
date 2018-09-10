import React, { Component } from 'react';
import TableRow from './TableRow';
import Loading from './Loading';

const Rows = props => {
    return(
        props.data.map(resource => {
            let resId = resource[Object.keys(resource)[0]];
            delete resource[Object.keys(resource)[0]];
                return <TableRow key={resId} data={resource}/>
            })
    );
}

const Headers = props => {
    let arr = [];
    let headers = props.vals;
    for(let i=0;i<headers.length;i++){
        arr.push(<th key={headers[i]}>{headers[i]}</th>);
    }
    return(arr);
}

export default class Table extends Component {
    render() {
        return(
            <table className="table table-hover table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                    <Headers vals={this.props.headers}/>
                    </tr>
                </thead>
                <tbody > 
                    {this.props.data.length !== 0 ? <Rows data={this.props.data}/>:<Loading text="Loading Table.js . . . "/>}
                </tbody> 
            </table>
        );   
    }
}
  