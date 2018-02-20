
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

class Routes extends Component {

    render() {
        return (

                <Switch>

                    <Route exact path="/" component={HomeComponentAsync}/>
                    <Route path="/ordens-servicos" component={ServiceOrderComponentAsync}/>
                    <Route component={NoMatchComponent} />
                </Switch>

        );
    }
}


export default Routes;
