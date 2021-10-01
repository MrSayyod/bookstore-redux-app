import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreateBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
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
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add book</h3>
        <div className="title-div">
          <label htmlFor="book-title">
            Title:
            <input
              type="text"
              id="book-title"
              name="title"
              onChange={handleChange}
              value={state.title || ''}
            />
          </label>
        </div>
        <div className="category-div">
          <label htmlFor="book-category">
            Category:
            <select id="book-category" onChange={handleChange} name="category">
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
        <h5>{error ? 'Enter required fields' : ''}</h5>
      </form>
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
