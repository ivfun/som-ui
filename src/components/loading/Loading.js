import React,{Component} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';

class LoadingComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading:props.isLoading
        }
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {isLoading, maximized} = props;
        this.setState({isLoading, maximized});
    }
    render(){
        const height = window.innerHeight-49;
        return(
            <div style={{height:height+'px'}}>
                <Dimmer inverted active>
                    <Loader size='huge'/>
                </Dimmer>
            </div>
        )
    }

}

export default LoadingComponent
