import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';

class NoMatchComponent extends Component{
    render(){
        const widthSideBar =  150;
        const height = window.innerHeight-2;
        const width = window.innerWidth - widthSideBar;

        return(
            <Segment basic size="massive" style={{height:height+'px', width:width+'px'}}>
                <div className="content" style={{height:(height-45)+'px'}}>
                    <span>404</span>
                </div>

            </Segment>
        )
    }

}

export default NoMatchComponent;