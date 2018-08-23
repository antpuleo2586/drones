import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppComponent from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
