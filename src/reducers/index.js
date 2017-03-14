import { combineReducers } from 'redux';
import user from './user';
import { routerReducer } from 'react-router-redux'
const reducers = {
    user
};

export default combineReducers({
    ...reducers,
    routing: routerReducer
});
