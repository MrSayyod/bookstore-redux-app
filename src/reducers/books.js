import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { CREATE_BOOK } from "../actions/index";
import { REMOVE_BOOK } from "../actions/index";

const start = {
  books: [
    { id: "1", title: "1984", category: "Sci-fi" },
    { id: "2", title: "To kill a mockingbird", category: "Horror" },
    { id: "3", title: "Robinson Crusoe", category: "History" },
  ],
};

const booksReducer = (state = initial, action) => {
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
      break;
    case REMOVE_BOOK:
      return [
        state.slice(0, action.index),
        state.slice(action.index + 1, state.length),
      ];
      break;
    default:
      return state;
  }
};


export default booksReducer