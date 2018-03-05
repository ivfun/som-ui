import React, {Component} from 'react';
import {Icon, Button, Table, Popup} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {componentAdding, componentEditing} from "../_store/actions/ComponentScreenAction";

class ListComponent extends Component{
    add(e){
        e.preventDefault();
        this.props.componentAdding();
    }
    edit(e){
        e.preventDefault();
        this.props.componentEditing();
    }
    render(){
        return(
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign="center">
                            <Button animated primary onClick={this.add.bind(this)}>
                                <Button.Content style={{boxShadow:'none'}} visible>Novo Registro</Button.Content>
                                <Button.Content style={{boxShadow:'none'}} hidden>
                                    <Icon name='right arrow' />
                                </Button.Content>
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Teste</Table.Cell>
                        <Table.Cell width={2}>
                            <Button.Group>
                                <Popup inverted
                                       trigger={
                                           <Button inverted color='blue' onClick={this.edit.bind(this)}>
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
const mapDispatchToProps = dispatch => ({
    componentAdding(){
        dispatch(componentAdding())
    },
    componentEditing(){
        dispatch(componentEditing())
    }
});


export default connect(null, mapDispatchToProps)(ListComponent);