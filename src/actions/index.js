const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const actionCreateBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

const actionRemoveBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export {
  CREATE_BOOK, REMOVE_BOOK, actionCreateBook, actionRemoveBook,
};
