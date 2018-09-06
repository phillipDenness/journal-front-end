import React, { Component } from 'react';

const TableRows = props => {
    let arr = [];
    props.data.map(r => {
            for(let i=1;i<props.colLength;i++){
                arr.push("<tr><td>{r[Object.keys(r)[i]]}</td></tr>");
            }
        }
    );

    return(arr);
}

const Columns = props => {
    const listCols = props.cols.map((c, key) =>
        <th key={key} scope="col">{c}</th>
    );

    return(listCols);
}

export default class Table extends Component {
    render() {
        return(
            <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <Columns cols={this.props.columns}/>
                    </tr>
                </thead>
                <tbody>
                    <TableRows data={this.props.json}
                               colLength={this.props.columns.length}/>
                </tbody>
            </table>
            </div>   
        );
    }
}