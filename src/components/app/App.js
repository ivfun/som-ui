import React, { Component } from 'react';
import LayoutComponent from '../layout/Layout';
import store  from '../_store/store';
import { Provider } from 'react-redux'


class App extends Component {
    render() {


        return (
            <Provider store={store}>
                <LayoutComponent/>
            </Provider>
        );
    }
}

export default App;
