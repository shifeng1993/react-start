import {combineReducers} from 'redux';

import index from './index/index';
const reducers = {
    index
};

export default combineReducers({
    ...reducers
});
