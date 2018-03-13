import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import SolutionService from '../services/Solution.service';
import {solutionListing} from "../_store/actions/SolutionScreenAction";

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
        SolutionService.create_update(this.state.objectToSave)
    }
    cancel(e){
        e.preventDefault();
        SolutionService.findAll();
        this.props.solutionListing();
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

const mapStateToProps = ({solution:{solutionModel, solutionScreen}}) => {
    return {...solutionModel, listing:solutionScreen.listing};
};
const mapDispatchToProps = dispatch => ({
    solutionListing(){
        dispatch(solutionListing())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);