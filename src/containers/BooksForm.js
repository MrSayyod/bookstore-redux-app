import React, { useState } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createBook } from "../actions/index";


const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <>
      <form className="form">
        <h3>Add book</h3>
        <div className="title-div">
          <label htmlFor="book-title">
            Title:
            <input type="text" id="book-title" />
          </label>
        </div>
        <div className="category-div">
          <label htmlFor="book-category">
            Category:
            <select id="book-category">
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <input type="Submit" />
      </form>
    </>
  );
};

export default BooksForm;
