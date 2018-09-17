import {createStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  routing: routerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store, rootReducer};
