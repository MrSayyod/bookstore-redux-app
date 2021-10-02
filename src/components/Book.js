import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css'

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
        <span className ="edit">Edit</span>
      </div>
    </div>
    <div className="progressSection">
      <div className="completionBar">
        <div className="completionBar-inner" />
      </div>
      <div>
        <p className="percent">
          {Math.floor(Math.random()*100)} %
        </p>
        <p className="completeText">Completed</p>
      </div>
    </div>
  </section>
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={deleteBook}>Remove</button></td>
    </tr>
  </>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
