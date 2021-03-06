import React, { Component } from 'react'
import { Sidebar, Segment, Menu } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import {routes} from '../routes/data/routes.data';
import Routes from "../routes/Routes";

import { connect } from 'react-redux'
import HeaderComponent from "./sub-components/Header";

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
                        {routes().map(m=>
                                <Link to={m.path} key={m.path}>
                                    <Menu.Item name={m.path} link>
                                        {m.description}
                                    </Menu.Item>
                                </Link>
                        )}
                    </Sidebar>

                    <Sidebar.Pusher>
                        <HeaderComponent/>
                        <Routes/>
                    </Sidebar.Pusher>

                </Sidebar.Pushable>
            </Router>
        )
    }
}

const mapStateToProps = ({content:{content}}) => {
    return{
        maximized: content.maximized,
        redirectToHome:content.redirectToHome
    }
};


export default connect(mapStateToProps)(LayoutComponent);