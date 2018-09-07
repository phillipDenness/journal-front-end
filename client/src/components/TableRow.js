import React, { Component } from 'react';

export default class TableRow extends Component {

    render() {
        let cells = this.props.data.map(c => {
            return c;
        });
    
        return (
          <tr>
            <td>{cells}</td>
          </tr>
        );
    }
}