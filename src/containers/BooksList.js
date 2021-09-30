import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ books, removeBooks }) => {
  const data = books.map((item) => (<Book key={item.id} book={item} deleteBook = {()=> handleRemoveBook(book)}/>));
  const handleRemoveBook = (book) => {
    removeBooks(book)
  }
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
  removeBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBooks: (book) => dispatch(removeBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
