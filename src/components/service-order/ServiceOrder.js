import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import HttpService from '../../utils/services/htpp/http.service';

class ServiceOrderComponent extends Component{

    componentWillMount(){
        HttpService.get('/component').then(data=>console.log(data));
    }

    render(){

        return(
            <ContentComponent headerName="Ordens de Serviços">
                <input type="text"/>
            </ContentComponent>
        )
    }
}
export default ServiceOrderComponent;