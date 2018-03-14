import React,{Component} from 'react';
import { Segment, Label, Input, Icon } from 'semantic-ui-react'
import './Content.css'
import { connect } from 'react-redux'
import {
    maximizeContent, minimizeContent, normalizeContent, redirectToHome
} from "./_store/actions/contentAction";
import {setTextToSearch} from "./_store/actions/searchAction";

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
            isDashboard:props.isDashboard,
            showSearch:false
        }
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {maximized, toHome, showSearch} = props;
        this.setState({maximized, toHome, showSearch})


    }
    handleClose(){
        this.props.redirectToHome();
    }
    handleSizeWindow(){
        this.state.maximized? this.props.minimizeContent():this.props.maximizeContent();
    }
    onChangeSearch(e){
        e.preventDefault();
        this.props.setTextToSearch(e.target.value);
    }
    render(){
        let{maximized, toHome, isDashboard, showSearch} = this.state;
        const widthSideBar =  maximized ? 0 : 150;
        const height = window.innerHeight-42;
        const width = window.innerWidth - widthSideBar;

        if(toHome) {
            this.props.normalizeContent();
            return (<Redirect to='/'/>);
        }

        return(
            <Segment basic style={{height:height+'px', width:width+'px', marginTop:'-7px'}}>
                <div className="content" style={{height:(height-35)+'px'}}>
                    <div className="header-content" >
                        <Label className="header-title" ribbon>{this.state.headerName}</Label>
                        {showSearch?
                            <Input
                                className="search-items"
                                size='mini'
                                onChange={this.onChangeSearch.bind(this)}
                                icon={{ name: 'search' }}
                                placeholder='Buscar...'
                            />:
                            null
                        }

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
const mapStateToProps = ({content:{content, search}}) => {
    return {
        maximized: content.maximized,
        toHome: content.toHome,
        showSearch: search.field !== ''
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
    },
    setTextToSearch(value){
        dispatch(setTextToSearch(value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);