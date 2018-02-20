import React from 'react';
import {Segment, Dimmer, Loader} from 'semantic-ui-react';

const LoadingComponent = ({isLoading, error}) => {
    let value = null;
    const widthSideBar =  150;
    const height = window.innerHeight-2;
    const width = window.innerWidth - widthSideBar;
    // Handle the loading state
    if (isLoading) {
        value = 'Loading...';
    }
    // Handle the error state
    else if (error) {
        value = 'Sorry, there was a problem loading the page.';
    }
    if (!value) {
        return null;
    } else return <Segment size="massive" style={{height: height + 'px', width: width + 'px'}}>
                    <Dimmer active>
                        <Loader inverted size='huge'>{value}</Loader>
                    </Dimmer>
                  </Segment>


};

export default LoadingComponent