import React, { Component } from 'react';
import Loading from './Loading';

const Cells = props => {
    let arr = [];
    let properties = Object.keys(props.data);
    for(let i=0;i<props.cols;i++){
        arr.push(<td key={Object.keys(properties)[i]}>{props.data[properties[i]]}</td>);
    }
    return(arr);
}

export default class TableRow extends Component {
    render() {
        let colNum = Object.keys(this.props.data).length;
        return(
            this.props.data !== 0 ? 
            (<tr><Cells cols={colNum} data={this.props.data}/></tr>) 
            : (<Loading text="Loading TableRow.js . . . "/>)
        );
    }
}