import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import finalReducer from './reducers/index';

const initial = {
  books: [
    {
      id: Math.round(Math.random() * 100) + 1,
      title: 'Book_1',
      category: 'Learning',
    },
    {
      id: Math.round(Math.random() * 100) + 1,
      title: 'Book_2',
      category: 'Action',
    },
    {
      id: Math.round(Math.random() * 100) + 1,
      title: 'Book_3',
      category: 'Sci-fi',
    },
    {
      id: Math.round(Math.random() * 100) + 1,
      title: 'Book_4',
      category: 'Kids',
    },
    {
      id: Math.round(Math.random() * 100) + 1,
      title: 'Book_5',
      category: 'History',
    },
  ],
};

const store = createStore(finalReducer, initial);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
