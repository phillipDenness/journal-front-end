import React, { Component } from 'react';
import { Loader, Table, Button, Icon } from 'semantic-ui-react';
import DynTableRow from './DynTableRow';

const Rows = props => {
    return(
        props.data.map(resource => {
            let resId = resource[Object.keys(resource)[0]];
            delete resource[Object.keys(resource)[0]];
                return <DynTableRow key={resId} data={resource}/>
            })
    );
}

const Headers = props => {
    let arr = [];
    let headers = props.vals;
    for(let i=0;i<headers.length;i++){
        arr.push(<Table.HeaderCell key={headers[i]}>{headers[i]}</Table.HeaderCell>);
    }
    return(arr);
}

export default class DynTable extends Component {
    render() {
        return(
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Headers vals={this.props.headers}/>
                    </Table.Row>
                </Table.Header>
                <Table.Body> 
                    {this.props.data.length !== 0 ? <Rows data={this.props.data}/>:<Loader active inline='centered' />}
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
  