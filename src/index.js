import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css';

import App from './containers/App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import createStore from './createStore';
import './globalStyles';

const { store } = createStore();

const Root = () => (
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>
);

render(<Root />, document.getElementById('root'));

registerServiceWorker();
