import React, { Component } from 'react';
import _ from 'lodash';
import { Loader, Table, Button, Icon } from 'semantic-ui-react';

const Headers = props => {
    let arr = [];
    let headers = props.vals;
    for(let i=0;i<headers.length;i++){
        arr.push(<Table.HeaderCell 
            sorted={props.column === headers[i] ? this.direction : null}
            onClick={this.handleSort(headers[i])}
            key={headers[i]}
            >{headers[i]}
            </Table.HeaderCell>);
    }
    return(arr);
}

export default class DynTable2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            column: null,
            data: this.props.data,
            direction: null
        }
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state
        return(
            <Table celled sortable>
                <Table.Header>
                    <Table.Row>
                        <Headers vals={this.props.headers} column={column}/>
                    </Table.Row>
                </Table.Header>
                <Table.Body> 
                    {_.map(data, ({ resourceId, name, url, framework, language }) => (
                        <Table.Row key={resourceId}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{url}</Table.Cell>
                            <Table.Cell>{framework}</Table.Cell>
                            <Table.Cell>{language}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body> 
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan={this.props.headers.length}>
                        <Button  href="/" color="green" floated='right' icon labelPosition='right' size='small'>
                            <Icon name='plus circle' /> Add Item
                        </Button>
                        <Button.Group>
                            <Button href="/" size='small'>Edit</Button>
                            <Button href="/" disabled size='small'>Save Changes</Button>
                        </Button.Group>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );   
    }
}
  