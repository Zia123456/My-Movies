/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './redux/MovieSlice';
import Movie from './Movie';
import Header from './Header';
import NotFound from './NotFound';
import Logo from './home-page-logo.png';

function Home() {
  const moviesList = useSelector((state) => state.movies.movies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const a = moviesList[0];
  const b = a?.results;

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtered = b?.filter((m) =>
    m.original_title.toLowerCase().includes(search.toLowerCase()),
  );

  if (moviesList.length === 0) {
    return (
      <div className="loading-container">
        <Header />
        <div className="circle" />
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Header search={search} handleSearch={handleSearch} />
      <div className="main-moviesList-container">
        <div className="home-logo-container">
          <img src={Logo} className="home-page-logo" alt="Logo" />
          <div>
            <h1>My Movies</h1>
            <p>{filtered.length} movies are available</p>
          </div>
        </div>
        <div className="moviesList-container">
          {filtered?.map((m) => (
            <Movie movie={m} key={m.id} id={m.id} />
          ))}
          ,{filtered?.length === 0 && <NotFound />}
        </div>
      </div>
    </div>
  );
}

export default Home;
