import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './redux/MovieSlice';
import Movie from './Movie';
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

  const filteredMovies = b?.filter((movie) => movie.original_title.toLowerCase().includes(search.toLowerCase()));

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
      <div className="moviesList-container">
        {filteredMovies?.map((m) => (
          <Movie movie={m} key={m.id} id={m.id} />
        ))}
        ,
        {filteredMovies?.length === 0 && <NotFound />}
      </div>
    </div>
  );
}

export default Home;
