import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import SolutionService from './services/Solution.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";

import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class SolutionComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        SolutionService.findAll();
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
            <ContentComponent headerName="Soluções" listing={listing}>
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({solution:{solution, solutionScreen}}) => {
    return {...solution, listing:solutionScreen.listing}
};


export default connect(mapStateToProps)(SolutionComponent);