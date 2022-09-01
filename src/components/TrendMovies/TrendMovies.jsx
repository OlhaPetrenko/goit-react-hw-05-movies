import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

import MoviesList from '../MoviesList/MoviesList';
// import s from './MoviesList.module.css';

function TrendMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findMovies() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?api_key=5b0447e2e1e726ae474ba46ec861fdf3'
        );
        // console.log('response', response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
    }
    findMovies();
  }, []);

  return (
    <>
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {error && <h2>{error.message}</h2>}
    </>
  );
}

export default TrendMovies;
