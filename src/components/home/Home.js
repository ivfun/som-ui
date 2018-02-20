import React,{Component} from 'react';
import ContentComponent from "../content/Content";

class HomeComponent extends Component{
    render(){


        return(
            <ContentComponent isDashboard headerName="Home"/>
        )
    }
}
export default HomeComponent;