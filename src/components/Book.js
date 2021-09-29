import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    </React.Fragment>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default Book
