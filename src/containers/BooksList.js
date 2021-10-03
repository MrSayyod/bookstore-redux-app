import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { actionRemoveBook, actionChangeFilter } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';
import '../styles/BooksList.css';
import profileImg from '../images/user.png';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const handleFilterChange = (event) => changeFilter(event.target.value);
  const filteredBooks = filter === 'ALL' ? books : books.filter((item) => item.category === filter);
  const data = filteredBooks.map((item) => (
    <Book key={item.id} book={item} deleteBook={() => handleRemoveBook(item)} />
  ));
  return (
    <>
      <div className="books-section">
        <div className="navBar">
          <h1 id="main-logo">Bookstore CMS</h1>
          <p className="books">BOOKS</p>
          <CategoryFilter
            handleFilterChange={handleFilterChange}
            className="categoryDropdown"
          />
          <div className="logoSec">
            <img src={profileImg} alt="logo" className="logo_1" />
          </div>
        </div>
        <section className="books-table">
          {data}
        </section>
      </div>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(actionRemoveBook(book)),
  changeFilter: (filter) => dispatch(actionChangeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
