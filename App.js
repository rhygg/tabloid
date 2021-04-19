import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Router from './routes'
import store from './state/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
