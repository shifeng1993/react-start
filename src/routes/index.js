import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import configureStore from '../stores';
import {syncHistoryWithStore} from 'react-router-redux'

// 以下是页面引入
import App from '../containers/App'
import UserListApp from '../containers/UserListApp'
import UserDetailApp from '../containers/UserDetailApp'
let store = configureStore();
/* react router 2.x 必须配置 browserHistory */
const history = syncHistoryWithStore(browserHistory, store);
const routes = (
    <Router history={history}>
        <Route path="/" component={App}/>
        <Route path="/users" component={UserListApp}/>
        <Route path="/users/:id" component={UserDetailApp}/>
    </Router>
);

export default routes;
