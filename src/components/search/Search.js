import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, handleSubmit, handleChange }) => {

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} name="search" placeholder="Search for characters here!" onChange={handleChange} />
        <button>Search</button>
      </form>
    </section >
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Search;
