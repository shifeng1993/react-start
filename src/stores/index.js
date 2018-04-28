import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// 使用thunk作为异步中间件，并加入devToolsExtension可以使用chrome的redux调试
const composedCreateStore = compose(applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension())(createStore);

// 导出已经配置好的store
export default(initialState = {}) => composedCreateStore(reducers, initialState)
