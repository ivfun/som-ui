import React,{Component} from 'react';
import ContentComponent from "../content/Content";
import CustomerService from './services/Customer.service';

import { connect } from 'react-redux';
import LoadingComponent from "../loading/Loading";

import Body from './sub-components/Body';
import Footer from './sub-components/Footer';

class CustomerComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:props.loading
        }
    }
    componentWillMount(){
        CustomerService.findAll();
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
            <ContentComponent headerName="Clientes">
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({customer:{customer}}) => {
    return customer
};


export default connect(mapStateToProps)(CustomerComponent);