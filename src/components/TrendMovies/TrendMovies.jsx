import { useState, useEffect } from 'react';
import axios from 'axios';

import MoviesList from '../MoviesList/MoviesList';
import s from './TrendMovies.module.css';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '5b0447e2e1e726ae474ba46ec861fdf3';

function TrendMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findMovies() {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASEURL}/trending/all/day?api_key=${KEY}`
        );

        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    findMovies();
  }, []);

  return (
    <>
      {loading && (
        <h2 className={s.Load}>Відбувається завантаження даних...</h2>
      )}
      {movies.length !== 0 && <MoviesList movies={movies} />}

      {movies.length === 0 && !loading && (
        <h2> На жаль, інформація щодо Вашого запиту відсутня :-(((</h2>
      )}
      {error && <h2>{error.message}</h2>}
    </>
  );
}

export default TrendMovies;
