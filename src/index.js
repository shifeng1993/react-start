import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();
let rootElement = document.getElementById('root');

ReactDOM.render(
  <div>
  <Provider store={store}>
      {routes}
  </Provider>
</div>, rootElement);
registerServiceWorker();
