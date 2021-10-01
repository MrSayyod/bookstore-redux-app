import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { actionRemoveBook, actionChangeFilter } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const data = books.map((item) => (
    <Book
      key={item.id}
      book={item}
      deleteBook={() => handleRemoveBook(item)}
    />
  ));
  return (
    <table className="books-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(actionRemoveBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
