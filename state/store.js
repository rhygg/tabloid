import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './root'

const enhancer = compose(applyMiddleware(thunk));

export default createStore(reducers, enhancer);