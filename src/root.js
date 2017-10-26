import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './configureStore';
import Routes from './routes';

// create store and wrapped history
const { store, history } = configureStore(window.__INITIAL_STATE__); // eslint-disable-line

export default () => { // eslint-disable-line
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};
