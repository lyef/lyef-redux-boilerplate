import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'; // eslint-disable-line import/no-extraneous-dependencies
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const history = createHistory();

export default function configureStore(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);

    const finalCreateStore = compose(
        applyMiddleware(reactRouterMiddleware, thunk, promiseMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )(createStore);

    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers'); // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return { store, history };
}
