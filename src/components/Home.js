/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './redux/Api';
import Movie from './Movie';
import Search from './Search';
import Header from './Header';
import NotFound from './NotFound';

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

  const filteredMovies = b?.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase()),
  );

  if (moviesList.length === 0) {
    return (
      <div className="loading-container">
        <Header />
        <div className="circle"></div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Header search={search} handleSearch={handleSearch} />
      <div className="moviesList-container">
        {filteredMovies?.map((m) => (
          <Movie movie={m} key={m.id} id={m.id} />
        ))}
        ,{filteredMovies?.length === 0 && <NotFound />}
      </div>
    </div>
  );
}

export default Home;
