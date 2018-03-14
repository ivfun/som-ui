import React, {Component} from 'react';
import {Icon, Button, Table, Popup} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {componentAdding, componentEditing} from "../_store/actions/ComponentScreenAction";
import PaginationCustomization from "../../pagination/Pagination";
import ComponentService from '../services/Component.service';
import {setFieldToSearch} from "../../content/_store/actions/searchAction";
class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:props.items,
            activePage: props.activePage,
            activeColumn:''
        }

    }


    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }

    setStateFromProps(props){
        this.setState({
            items:props.items,
            activePage:props.activePage
        });
    }

    add(e){
        e.preventDefault();
        this.props.componentAdding();
    }
    edit(item){
        this.props.componentEditing(item);
    }

    remove(item){
        const {id} = item;
        ComponentService.remove(id);
    }

    handleSearchBy = clickedColumn => () => {
        this.setState({activeColumn:clickedColumn});
        this.props.setFieldToSearch(clickedColumn);
    };

    render(){
        let {items, activePage, activeColumn} = this.state;

        const itemsByPage = 7;
        const totalPages = Math.ceil(items.length / itemsByPage);
        const start = (activePage - 1)* itemsByPage;
        const end = itemsByPage * activePage;

        return(
            <div>
                <Table striped celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={2} style={{cursor:'pointer'}} onClick={this.handleSearchBy('id')}>
                                ID{activeColumn === 'id' ? <Icon name='pin' style={{float:'right'}} />:null}
                            </Table.HeaderCell>
                            <Table.HeaderCell width={12} style={{cursor:'pointer'}} onClick={this.handleSearchBy('description')}>
                                Descrição{activeColumn === 'description' ? <Icon name='pin' style={{float:'right'}} />:null}
                            </Table.HeaderCell>
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
                        {items.slice(start,end ).map(item=>
                            <Table.Row key={item.id}>
                                <Table.Cell width={2}>{item.friendly_id}</Table.Cell>
                                <Table.Cell width={12}>{item.description}</Table.Cell>
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
                                                   <Button inverted color='red'  onClick={this.remove.bind(this, item)}>
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
                <PaginationCustomization activePage={activePage} totalPages={totalPages}/>
            </div>
        )
    }
}

const mapStateToProps = ({component:{component}, pagination, content:{search}} ) => {
    let items;
    if(search.text !== '' )
        items = component.items.filter(f=>f[search.field].toLowerCase().includes(search.text.toLowerCase()));
    else
        items = component.items;


    return {
        items,
        activePage:pagination.activePage
    }
};

const mapDispatchToProps = dispatch => ({
    componentAdding(){
        dispatch(componentAdding())
    },
    componentEditing(item){
        dispatch(componentEditing(item))
    },
    setFieldToSearch(key){
        dispatch(setFieldToSearch(key))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);