/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import backArrow from './back-arrow.png';

const MovieDetails = () => {
  const movie = useSelector((state) => state.movies.selectedMovie);
  const baseUrl = 'https://image.tmdb.org/t/p/w500/';
  const posterPath = movie.poster_path;
  return (
    <div className="movieDetails-container">
      <Link to="/" className="back-arrow">
        <img src={backArrow} className="back-arrow-img" alt="back arrow" />
        <p>BACK</p>
      </Link>
      <img
        className="poster-img-details"
        src={`${baseUrl}${posterPath}`}
        alt="poster"
      />
      <div className="details-container">
        <span className="text">
          <h3>Title :</h3>
          {movie.original_title}
        </span>
        <span className="text">
          <h3>Release Date : </h3>
          <p>{movie.release_date}</p>
        </span>
        <span className="text">
          <h3>Media Type : </h3>
          <p>{movie.media_type}</p>
        </span>
        <span className="text">
          <h3>Original Language: </h3>
          <p> {movie.original_language}</p>
        </span>
        <span className="text">
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
        </span>
        <span className="text">
          <h3>Popularity : </h3>
          <p>{movie.popularity}</p>
        </span>
        <span className="text">
          <h3>Vote Average : </h3>
          <p>{movie.vote_average}</p>
        </span>
        <span className="text">
          <h3>Vote Count : </h3>
          <p>{movie.vote_count}</p>
        </span>
      </div>
    </div>
  );
};

export default MovieDetails;
