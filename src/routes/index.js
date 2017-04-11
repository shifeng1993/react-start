import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import configureStore from '../stores';
import {syncHistoryWithStore} from 'react-router-redux'

// 以下是页面引入
import{ Index ,Home, About} from '../containers';

let store = configureStore();
/* react router 2.x 必须配置 browserHistory */
const history = syncHistoryWithStore(browserHistory, store);
const routes = (
    <Router history={history}>
        <Route path="/" component={Index}>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
);

export default routes;
