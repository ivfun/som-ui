import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ComponentService from './services/Component.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";

import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class ComponentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        ComponentService.findAll();
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
            <ContentComponent headerName="Componentes">
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({component}) => {
    return component
};


export default connect(mapStateToProps)(ComponentComponent);