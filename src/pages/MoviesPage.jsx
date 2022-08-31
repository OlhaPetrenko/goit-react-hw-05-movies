import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import MovieItem from '../components/MovieItem/MovieItem';

function MoviesPage() {
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  console.log('queryName', queryName);

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
        // console.log('movie', movie);
      } catch (error) {
        setError(error);
      }
    }
    findMovies();
  }, [queryName]);

  return (
    <main>
      <SearchForm onSubmit={updateQueryString} />
      {movies.length !== 0 && (
        <ul>
          {movies.map(({ id, title, name }) => (
            <MovieItem key={id} id={id} title={title} name={name} />
          ))}
        </ul>
      )}
      {error && <h2>{error.message}</h2>}
    </main>
  );
}

export default MoviesPage;
