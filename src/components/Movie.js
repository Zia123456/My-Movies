/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SetselectedMovie } from './redux/MovieSlice';

function Movie({ movie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const posterPath = movie.poster_path;

  const dispatch = useDispatch();
  const handleFetchingMovie = (movie) => {
    dispatch(SetselectedMovie(movie));
  };

  return (
    <div className="movie-container">
      <div className="img-container">
        <img
          className="poster-img"
          src={`${baseUrl}${posterPath}`}
          alt="poster"
        />
      </div>
      <span className="title-text">{movie.original_title}</span>
      <Link
        onClick={() => {
          handleFetchingMovie(movie);
        }}
        className="view-details"
        to="/MovieDetails"
      >
        view details
      </Link>
    </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.objectOf.isRequired,
};

export default Movie;
