import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo .png';
import Search from './Search';

function Header({ search, handleSearch }) {
  return (
    <nav className="navBar-container">
      <Link to="/" className="logo-container">
        <img className="logo-icon" src={logo} alt="logo" />
        <h3 className="text-myMovies">My Movies</h3>
      </Link>
      <Search search={search} handleSearch={handleSearch} />
    </nav>
  );
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Header;
