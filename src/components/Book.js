import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, deleteBook }) => (
  <>
    <section className="bookSection">
      <div className="bookDetails">
        <p className="bookCategory">{book.category}</p>
        <p className="bookTitle">{book.title}</p>
        <p className="bookAuthor">Suzanne Collins</p>
        <div className="bookControlSection">
          <span className="comments">Comments</span>
          <button type="button" className="remove" onClick={deleteBook}>Remove</button>
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progressSection">
        <div className="completionBar">
          <div className="completionBar-inner" />
        </div>
        <div>
          <p className="percent">
            {Math.floor(Math.random() * 100)}
            {' '}
            {' '}
            %
          </p>
          <p className="completeText">Completed</p>
        </div>
      </div>
      <div className="chapterSection">
        <p className="currentChapter">Current Chapter</p>
        <p className="chapIntro">Introduction</p>
        <button type="button" className="progressBtn">
          <span className="progressText">Update Progress</span>
        </button>
      </div>
    </section>
  </>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
