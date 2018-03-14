import React, {Component} from 'react';
import { Menu, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            maximized:false
        }
    }
    componentWillReceiveProps(newProps){
        this.setStateFromProps(newProps);
    }
    setStateFromProps(props){
        let {maximized} = props;
        if(maximized !== this.state.maximized)
            this.setState({maximized});

    }
    render(){
        let{maximized} = this.state;
        const widthSideBar =  maximized ? 0 : 150;
        const width = window.innerWidth - widthSideBar;

        return(
            <div style={{width:width+'px', paddingRight:'25px'}}>
                <Menu pointing secondary>
                    <Menu.Menu position='right'>
                        <Menu.Item name='logout' active>
                            <Icon size='large' fitted name='user' />
                            caiquevallim
                        </Menu.Item>

                    </Menu.Menu>

                </Menu>
            </div>
        )
    }
}
const mapStateToProps = ({content:{content}}) => {
    return {
        maximized: content.maximized,
    }
};
export default connect(mapStateToProps)(HeaderComponent);
