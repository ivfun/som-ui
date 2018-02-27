import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import ServiceOrderService from './services/ServiceOrder.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";
import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class ServiceOrderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        ServiceOrderService.findAll();
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
        if(loading )
            return (<LoadingComponent/>)
        return(
            <ContentComponent headerName="Ordens de Serviços">
                <Body/>
                <Footer/>

            </ContentComponent>
        )
    }
}
const mapStateToProps = ({serviceOrder}) => (serviceOrder);


export default connect(mapStateToProps)(ServiceOrderComponent);