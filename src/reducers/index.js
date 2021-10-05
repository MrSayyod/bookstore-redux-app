import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const initialState = {
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

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});
const store = createStore(rootReducer, initialState);

export default store;
