import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import ProblemService from '../services/Problem.service';
import {problemListing} from "../_store/actions/ProblemScreenAction";

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
        ProblemService.create_update(this.state.objectToSave)
    }
    cancel(e){
        e.preventDefault();
        ProblemService.findAll();
        this.props.problemListing();
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

const mapStateToProps = ({problem:{problemModel, problemScreen}}) => {
    return {...problemModel, listing:problemScreen.listing};
};
const mapDispatchToProps = dispatch => ({
    problemListing(){
        dispatch(problemListing())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);