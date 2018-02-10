import { createStore, compose, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger();

export default function configureStore() {
    const middleware = applyMiddleware(thunk, logger);
    const createStoreWithMiddleware = compose(middleware, devTools());
    return createStoreWithMiddleware(createStore)(reducers);

};
