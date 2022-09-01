import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useLocation } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

function MoviesPage() {
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  // console.log('queryName', queryName);

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
        const response = await axios.get(
          ` https://api.themoviedb.org/3/search/movie/?api_key=5b0447e2e1e726ae474ba46ec861fdf3&language=en-US&page=1&query=${queryName}`
        );
        console.log('response', response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
    }
    findMovies();
  }, [queryName]);

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} />
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {error && <h2>{error.message}</h2>}
    </main>
  );
}

export default MoviesPage;
