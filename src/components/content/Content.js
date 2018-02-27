import React,{Component} from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react'
import './Content.css'
import { connect } from 'react-redux'
import {maximizeContent, minimizeContent, normalizeContent, redirectToHome} from "./_store/actions/contentAction";
import {
    Redirect
} from "react-router-dom";

class ContentComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            headerName:props.headerName,
            maximized:false,
            toHome:false,
            isDashboard:props.isDashboard
        }
    }
    componentWillMount(){
        this.props.normalizeContent()
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {maximized, toHome} = props;
        if(maximized !== this.state.maximized)
            this.setState({maximized});
        if(toHome)
            this.setState({toHome:true})
    }
    handleClose(){
        this.props.redirectToHome();
    }
    handleSizeWindow(){
        this.state.maximized? this.props.minimizeContent():this.props.maximizeContent();
    }
    render(){
        let{maximized, toHome, isDashboard} = this.state;
        const widthSideBar =  maximized ? 0 : 150;
        const height = window.innerHeight-32;
        const width = window.innerWidth - widthSideBar;

        if(toHome) {
            this.props.normalizeContent();
            return (<Redirect to='/'/>);
        }

        return(
            <Segment basic size="massive" style={{height:height+'px', width:width+'px', marginTop:'-17px'}}>
                <div className="content" style={{height:(height-35)+'px'}}>
                    <div className="header-content" >
                        <Label className="header-title" ribbon>{this.state.headerName}</Label>

                        {isDashboard?'':<Icon as='i' className="close-content" name='window close' size='large' link onClick={()=>this.handleClose()}/>}

                        {maximized ?
                            <Icon as='i' className="maximize-content" name='window minimize' size='large' link  onClick={() => this.handleSizeWindow()}/>
                        :
                            <Icon as='i' className="minimize-content" name='window maximize' size='large' link  onClick={() => this.handleSizeWindow()}/>}
                    </div>
                    {this.props.children}
                </div>

            </Segment>
        )
    }
}
const mapStateToProps = ({content}) => {
    return {
        maximized: content.maximized,
        toHome: content.toHome
    }
};

const mapDispatchToProps = dispatch => ({
    redirectToHome(){
        dispatch(redirectToHome())
    },
    maximizeContent(){
        dispatch(maximizeContent())
    },
    minimizeContent(){
        dispatch(minimizeContent())
    },
    normalizeContent(){
        dispatch(normalizeContent())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);