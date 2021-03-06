import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreateBook } from '../actions/index';
import { CATEGORIES } from '../components/CategoryFilter';
import '../styles/BooksForm.css';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: 'Action' });
  let error = false;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = state;
    if (title === '' || category === '') {
      error = true;
    } else {
      createBook({
        id: Math.round(Math.random() * 100) + 1,
        title,
        category,
      });
      setState({ title: '', category: 'Action' });
    }
    return error;
  };

  return (
    <>
      <div className="bookFormSection">
        <div className="addNewBook">Add new book</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-title"
            name="title"
            onChange={handleChange}
            value={state.title || ''}
            placeholder="Book title"
          />
          <select
            className="category"
            name="category"
            onChange={handleChange}
            placeholder="Category"
            value={state.category}
          >
            {CATEGORIES.map((item) => (
              <option key={item} value={item} className="categoryText">
                {item}
              </option>
            ))}
          </select>
          <button className="addBookBTN" type="submit">
            <span className="addBookText">Add book</span>
          </button>
        </form>
      </div>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(actionCreateBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
