import React,{Component} from 'react';
import ContentComponent from "../content/Content";

class ServiceOrderComponent extends Component{
    render(){

        return(
            <ContentComponent headerName="Ordens de Serviços">
                <input type="text"/>
            </ContentComponent>
        )
    }
}
export default ServiceOrderComponent;