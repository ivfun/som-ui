import React, {Component} from 'react';
import {Icon, Button, Table, Popup} from 'semantic-ui-react';

class ListComponent extends Component{
    render(){
        return(
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell width={2}/>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Teste</Table.Cell>
                        <Table.Cell width={2}>
                            <Button.Group>
                                <Popup inverted
                                       trigger={
                                           <Button inverted color='blue'>
                                               <Icon name='edit' size='large'/>
                                           </Button>
                                       }
                                       content='Editar'
                                />
                                <Button.Or/>
                                <Popup inverted
                                       trigger={
                                           <Button inverted color='red'>
                                               <Icon name='trash outline' size='large'/>
                                           </Button>
                                       }
                                       content='Remover'
                                />

                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

        )
    }
}

export default ListComponent;