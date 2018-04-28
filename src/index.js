import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// 在根组件的render周期内执行store的初始化
ReactDOM.render(
  <div>
  <Provider store={configureStore()}>
    {routes}
  </Provider>
</div>, document.getElementById('root'));
registerServiceWorker();
