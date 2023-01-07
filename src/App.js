import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {
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
