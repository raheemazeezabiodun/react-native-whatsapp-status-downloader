import { createStore, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();
const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export default function configureStore() {
    const middleware = applyMiddleware(thunk, logger, reactNavigationReduxMiddleware);
    const createStoreWithMiddleware = compose(middleware, devTools());
    return createStoreWithMiddleware(createStore)(reducers);

};
