import React, {Component} from 'react';
import {Icon, Button, Table, Popup} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {solutionAdding, solutionEditing} from "../_store/actions/SolutionScreenAction";
import PaginationCustomization from "../../pagination/Pagination";
import SolutionService from '../services/Solution.service';
import {setFieldToSearch} from "../../content/_store/actions/searchAction";
import {getItemsFiltered} from "../../../utils/functions/search/search";
class ListComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:props.items,
            activePage: props.activePage,
            activeColumn: props.activeColumn
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
        this.props.solutionAdding();
    }
    edit(item){
        this.props.solutionEditing(item);
    }
    remove(item){
        const {id} = item;
        SolutionService.remove(id);
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
                            <Table.HeaderCell width={2} style={{cursor:'pointer'}} onClick={this.handleSearchBy('friendly_id')}>
                                {activeColumn === 'friendly_id' ? <Icon name='filter'/>:null}ID
                            </Table.HeaderCell>
                            <Table.HeaderCell width={12} style={{cursor:'pointer'}} onClick={this.handleSearchBy('description')}>
                                {activeColumn === 'description' ? <Icon name='filter'/>:null}
                                Descrição
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

const mapStateToProps = ({solution:{solution}, pagination, content:{search}} ) => {

    return {
        items:getItemsFiltered(solution.items, search),
        activePage:pagination.activePage,
        activeColumn: search.field
    }
};
const mapDispatchToProps = dispatch => ({
    solutionAdding(){
        dispatch(solutionAdding())
    },
    solutionEditing(item){
        dispatch(solutionEditing(item))
    },
    setFieldToSearch(key){
        dispatch(setFieldToSearch(key))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);