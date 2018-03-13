
import React, { Component } from 'react';

import {
    Route, Switch
} from 'react-router-dom';

import NoMatchComponent from "../no-match/NoMatch";
import Loadable from 'react-loadable';
import LoadingComponent from "../loading/Loading";
import {routes} from './data/routes.data';

const HomeComponentAsync = Loadable({
    loader: () => import('../home/Home'),
    loading: LoadingComponent,
});

class Routes extends Component {

    render() {
        return (
            <div>
                <Switch>

                    <Route exact path="/" component={HomeComponentAsync}/>
                    {routes().map(m=><Route key={m.path} path={m.path} component={m.loadable}/>)}
                    <Route component={NoMatchComponent} />
                </Switch>
            </div>

        );
    }
}


export default Routes;
