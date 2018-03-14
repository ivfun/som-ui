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
        let {loading, listing} = props;
        this.setState({loading, listing});
    }

    render(){
        const {loading, listing} = this.state;
        if(loading)
            return (<LoadingComponent/>);
        return(
            <ContentComponent headerName="Clientes" listing={listing}>
               <Body/>
               <Footer/>
            </ContentComponent>
        )
    }
}
const mapStateToProps = ({customer:{customer, customerScreen}}) => {
    return {...customer,listing:customerScreen.listing}
};


export default connect(mapStateToProps)(CustomerComponent);