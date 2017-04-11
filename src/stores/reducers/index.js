import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import user from './user';
const reducers = {
    user
};

export default combineReducers({
    ...reducers,
    routing: routerReducer
});
