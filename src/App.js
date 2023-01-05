import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
// import Header from './components/Header';

function App() {
  // const moviesList = useSelector((state) => state.movies.movies);
  // if (moviesList.length === 0) {
  //   return (
  //     <div className="loading-container">
  //       <Header />
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieDetails" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
