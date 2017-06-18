import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const store = applyMiddleware(thunkMiddleware)(createStore);

export default store;