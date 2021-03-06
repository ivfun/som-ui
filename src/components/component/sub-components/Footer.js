import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ComponentService from '../services/Component.service';
import {componentListing} from "../_store/actions/ComponentScreenAction";

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
        ComponentService.create_update(this.state.objectToSave)
    }
    cancel(e){
        e.preventDefault();
        ComponentService.findAll();
        this.props.componentListing();
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

const mapStateToProps = ({component:{componentModel, componentScreen}}) => {
    return {...componentModel, listing:componentScreen.listing};
};
const mapDispatchToProps = dispatch => ({
    componentListing(){
        dispatch(componentListing())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);