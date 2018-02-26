import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ServiceOrder from './services/ServiceOrder.service';

import { connect } from 'react-redux';
class ServiceOrderComponent extends Component{

    componentWillMount(){
        ServiceOrder.findAll();
    }

    render(){

        return(
            <ContentComponent headerName="Ordens de Serviços">
                <input type="text"/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({serviceOrder}) => {
    console.log(serviceOrder);
    return serviceOrder;
};

export default connect(mapStateToProps)(ServiceOrderComponent);