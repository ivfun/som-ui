import React, { Component } from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';

import Routes from "../routes/Routes";

import { connect } from 'react-redux'

class LayoutComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            maximized:false
        }
    }

    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(newProps){
        let {maximized} = newProps;
        if(maximized !== this.state.maximized)
            this.setState({maximized});
    }
    render() {

        let {maximized} = this.state;

        return (
            <Router>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='slide out' width='thin' visible={!maximized} icon='labeled' vertical inverted size="large" >
                        <Link to="/">
                            <Menu.Item name='home' link>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to="/ordens-servicos">
                            <Menu.Item name='ordem-servico' link>
                                Ordem de Serviço
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Routes/>
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    maximized: state.maximized,
    redirectToHome:state.redirectToHome
});


export default connect(mapStateToProps)(LayoutComponent);