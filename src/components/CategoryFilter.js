import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ handleFilterChange, className }) => (
  <select name="category" className={className} onChange={handleFilterChange}>
    <option value="ALL">CATEGORIES</option>
    {CATEGORIES.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export { CATEGORIES, CategoryFilter };
