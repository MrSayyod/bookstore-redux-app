import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './reducers/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
