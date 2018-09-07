import React, { Component } from 'react';
import TableRow from './TableRow';

export default class Table extends Component {
    constructor(props){
        super(props)
        this.rows = this.rows.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.rows();
        }
    }

    rows(){
        this.props.data.map(r => {
            let key = r[Object.keys(r)[0]];
            delete r[Object.keys(r)[0]];
            this.setState({
                data: <TableRow key={key} data={r}/>
            });
        });
    }

    render() {
      return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Re</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody > 
                {this.rows()}
            </tbody> 
        </table>
      );   
    }
}
  