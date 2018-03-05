import React, {Component} from 'react';
import {Icon, Button, Table, Popup} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {componentAdding, componentEditing} from "../_store/actions/ComponentScreenAction";

class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){

        this.setState({
            items:props.items
        });
    }

    add(e){
        e.preventDefault();
        this.props.componentAdding();
    }
    edit(item){
        this.props.componentEditing(item);
    }
    render(){
        let {items} = this.state;

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
                    {items.map(item=>
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.description}</Table.Cell>
                            <Table.Cell width={2}>
                                <Button.Group>
                                    <Popup inverted
                                           trigger={
                                               <Button inverted color='blue' onClick={this.edit.bind(this, item)}>
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
                    )}
                </Table.Body>
            </Table>

        )
    }
}

const mapStateToProps = ({component:{component}}) => {
    return component
};

const mapDispatchToProps = dispatch => ({
    componentAdding(){
        dispatch(componentAdding())
    },
    componentEditing(item){
        dispatch(componentEditing(item))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);