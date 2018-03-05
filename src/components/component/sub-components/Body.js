import React,{Component} from 'react';
import ListComponent from './List';
import AddComponent from './Add';
import EditComponent from './Edit';

import {connect} from 'react-redux';

class Body extends Component{
    constructor(props){
        super(props);
        this.state ={
            editing:props.editing,
            listing:props.listing,
            adding:props.adding
        }
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){

        this.setState({
            adding:props.adding,
            editing:props.editing,
            listing:props.listing
        });
    }

    render(){
        return(
            <div className="body-content">
                {this.state.listing? <ListComponent/>:null}
                {this.state.adding? <AddComponent/>:null}
                {this.state.editing? <EditComponent/>:null}

            </div>
        )
    }
}
const mapStateToProps = ({component:{componentScreen}}) => {
    return componentScreen
};


export default connect(mapStateToProps)(Body);