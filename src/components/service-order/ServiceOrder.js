import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ServiceOrder from './services/ServiceOrder.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";
class ServiceOrderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        ServiceOrder.findAll();
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
        return(
            <ContentComponent headerName="Ordens de Serviços">
               <LoadingComponent isLoading={loading}/>
               <input type="text"/>

            </ContentComponent>
        )
    }
}
const mapStateToProps = ({serviceOrder}) => (serviceOrder);


export default connect(mapStateToProps)(ServiceOrderComponent);