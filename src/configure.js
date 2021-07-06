import {createStore,applyMiddleware} from 'redux';
import rootReducer from "./reducers/index";
import ReduxThunk from 'redux-thunk';

export const middlewares=[ReduxThunk]

export default createStore(rootReducer,{},applyMiddleware(...middlewares));