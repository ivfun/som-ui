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
        let {loading} = props;
        this.setState({loading});
    }

    render(){
        const {loading} = this.state;
        if(loading)
            return (<LoadingComponent/>);
        return(
            <ContentComponent headerName="Soluções">
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({solution:{solution}}) => {
    return solution
};


export default connect(mapStateToProps)(SolutionComponent);