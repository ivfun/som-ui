import React,{Component} from 'react';
import ListComponent from './List';
import FormComponent from './Form';
class Body extends Component{


    render(){
        return(
            <div className="body-content">
                <ListComponent/>
            </div>
        )
    }
}


export default Body;