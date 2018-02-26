import React,{Component} from 'react';
import {Segment, Dimmer, Loader} from 'semantic-ui-react';

import { connect } from 'react-redux'

class LoadingComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading:props.loading,
            isLoading:props.isLoading
        }
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {loading} = props;
        this.setState({loading});
    }
    render(){
        const {isLoading, maximized} = this.state;
        let value = null;
        const widthSideBar =  maximized?0:150;
        const height = window.innerHeight-2;
        const width = window.innerWidth - widthSideBar;

        // Handle the loading state
        if (isLoading) {
            value = 'Loading...';
        }
        if(!value)
            return null;

        return(
            <Segment size="massive" style={{height: height + 'px', width: width + 'px'}}>
                <Dimmer active>
                    <Loader inverted size='huge'>{value}</Loader>
                </Dimmer>
            </Segment>
        )
    }

}
const mapStateToProps = ({content}) => ({
    maximized: content.maximized
});
export default connect(mapStateToProps)(LoadingComponent)
