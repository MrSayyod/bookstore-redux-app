import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Book from "../components/Book";

const BooksList = ({ books }) => {
  const data = books.map((item)=>(<Book key={item.id} book={item} />))
  return (
    <table className='books-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { data }
      </tbody>
    </table>
  )
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = (state) => {
  const { book } = state
  console.log(state)
  return { books: book.booksReducer.books} 
}

export default connect(mapStateToProps, null)(BooksList)
