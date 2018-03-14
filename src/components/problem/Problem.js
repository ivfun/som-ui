import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ProblemService from './services/Problem.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";

import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class ProblemComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        ProblemService.findAll();
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
            <ContentComponent headerName="Problemas" listing={listing}>
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({problem:{problem, problemScreen}}) => {
    return {...problem, listing:problemScreen.listing}
};


export default connect(mapStateToProps)(ProblemComponent);