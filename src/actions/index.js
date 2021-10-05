const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const actionCreateBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

const actionRemoveBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const actionChangeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, actionCreateBook, actionRemoveBook, actionChangeFilter,
};
