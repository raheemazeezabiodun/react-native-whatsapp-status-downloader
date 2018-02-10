import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore() {
    const middleware = applyMiddleware(thunk);
    return compose(middleware)(createStore)(reducers);
}
