import React from 'react';
import PropTypes from 'prop-types';

function Search({ search, handleSearch }) {
  return (
    <div className="search-container">
      <input
        onChange={handleSearch}
        className="search-input"
        type="text"
        value={search}
        placeholder="Search..."
      />
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
export default Search;
