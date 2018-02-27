
import React, { Component } from 'react';

import {
    Route, Switch
} from 'react-router-dom';

import NoMatchComponent from "../no-match/NoMatch";
import Loadable from 'react-loadable';
import LoadingComponent from "../loading/Loading";

const HomeComponentAsync = Loadable({
    loader: () => import('../home/Home'),
    loading: LoadingComponent,
});
const ServiceOrderComponentAsync = Loadable({
    loader: () => import('../service-order/ServiceOrder'),
    loading: LoadingComponent,
});

const ComponentComponentAsync = Loadable({
    loader: () => import('../component/Component'),
    loading: LoadingComponent,
});

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>

                    <Route exact path="/" component={HomeComponentAsync}/>
                    <Route path="/service-order" component={ServiceOrderComponentAsync}/>
                    <Route path="/component" component={ComponentComponentAsync}/>
                    <Route component={NoMatchComponent} />
                </Switch>
            </div>

        );
    }
}


export default Routes;
