import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import s from '../components/TrendMovies/TrendMovies.module.css';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '5b0447e2e1e726ae474ba46ec861fdf3';

function MoviesPage() {
  const [movies, setMovies] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!queryName) {
      return;
    }
    async function findMovies() {
      try {
        setStatus('pending');

        const response = await axios.get(
          ` ${BASEURL}/search/movie/?api_key=${KEY}&language=en-US&page=1&query=${queryName}`
        );

        setMovies(response.data.results);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    }
    findMovies();
  }, [queryName]);

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} />
      {status === 'pending' && (
        <h2 className={s.Load}>Відбувається завантаження даних...</h2>
      )}
      {status === 'resolved' && movies.length !== 0 && (
        <MoviesList movies={movies} />
      )}
      {status === 'resolved' && movies.length === 0 && (
        <h2> На жаль, інформація щодо Вашого запиту відсутня :-(((</h2>
      )}
      {status === 'rejected' && <h1>{error.message}</h1>}
    </main>
  );
}

export default MoviesPage;
