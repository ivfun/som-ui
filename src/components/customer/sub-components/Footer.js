import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import CustomerService from '../services/Customer.service';
import {customerListing} from "../_store/actions/CustomerScreenAction";

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            listing:props.listing
        }
    }

    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {dispatch, listing, ...objectToSave} = props;
        this.setState({objectToSave, listing});
    }
    create_update(e){
        e.preventDefault();
        CustomerService.create_update(this.state.objectToSave)
    }
    cancel(e){
        e.preventDefault();
        CustomerService.findAll();
        this.props.customerListing();
    }

    render(){
        const {listing} = this.state;

        if(listing)
            return null;

        return(
            <div className="footer-content">
                <Button basic loading={false} type="button" onClick={this.cancel.bind(this)}>Cancelar</Button>
                <Button secondary loading={false} type="submit" onClick={this.create_update.bind(this)}>Salvar</Button>
            </div>
        )
    }
}

const mapStateToProps = ({customer:{customerModel, customerScreen}}) => {
    return {...customerModel, listing:customerScreen.listing};
};
const mapDispatchToProps = dispatch => ({
    customerListing(){
        dispatch(customerListing())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);