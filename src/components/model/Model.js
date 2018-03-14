import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ModelService from './services/Model.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";

import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class ModelComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        ModelService.findAll();
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {loading, listing} = props;
        this.setState({loading, listing});
    }

    render(){
        const {loading, listing} = this.state;
        if(loading)
            return (<LoadingComponent/>);
        return(
            <ContentComponent headerName="Modelos" listing={listing}>
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({model:{model, modelScreen}}) => {
    return {...model, listing:modelScreen.listing}
};


export default connect(mapStateToProps)(ModelComponent);