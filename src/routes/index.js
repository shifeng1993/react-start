import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// 以下是页面引入
import {Index, Home, About} from '../pages';

const routes = (
  <BrowserRouter>
    <div id="app">
      <Route exact path="/" component={Index}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>
);
export default routes;
