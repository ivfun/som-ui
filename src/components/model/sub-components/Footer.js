import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ModelService from '../services/Model.service';
import {modelListing} from "../_store/actions/ModelScreenAction";

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
        ModelService.create_update(this.state.objectToSave)
    }
    cancel(e){
        e.preventDefault();
        ModelService.findAll();
        this.props.modelListing();
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

const mapStateToProps = ({model:{modelModel, modelScreen}}) => {
    return {...modelModel, listing:modelScreen.listing};
};
const mapDispatchToProps = dispatch => ({
    modelListing(){
        dispatch(modelListing())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);