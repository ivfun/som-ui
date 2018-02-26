import React,{Component} from 'react';
import {Dimmer, Loader} from 'semantic-ui-react';
import ContentComponent from "../content/Content";

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

        return(
            <ContentComponent headerName="Loading">
                <Dimmer inverted active>
                    <Loader size='huge'>{'Carregando...'}</Loader>
                </Dimmer>
            </ContentComponent>
        )
    }

}
export default LoadingComponent
