import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

// const start = {
//   books: [
//     { id: '1', title: '1984', category: 'Sci-fi' },
//     { id: '2', title: 'To kill a mockingbird', category: 'Horror' },
//     { id: '3', title: 'Robinson Crusoe', category: 'History' },
//   ],
// };

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: action.book.id,
          title: action.book.title,
          category: action.book.category,
        },
      ];
    case REMOVE_BOOK:
      // return [
      //   state.slice(0, action.index),
      //   state.slice(action.index + 1, state.length),
      // ];
      return state.filter((item) => item.id !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
