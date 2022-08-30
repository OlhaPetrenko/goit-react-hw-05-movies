import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
import SearchForm from '../components/SearchForm/SearchForm';

function MoviesPage() {
  const [search, setSearch] = useState('');
  // const [error, setError] = useState(null);
  const prevSearch = useRef('');

  useEffect(() => {
    prevSearch.current = search;
    async function findMovies() {
      console.log('search', prevSearch.current);
      // try {
      //   const response = await axios.get(
      //     ` https://api.themoviedb.org/3/${prevSearch.current}/movie/?api_key=5b0447e2e1e726ae474ba46ec861fdf3&language=en-US&page=1&include_adult=false`
      //   );
      //   console.log('response', response.data);
      //   // setMovie(response.data);
      //   // console.log('movie', movie);
      // } catch (error) {
      //   setError(error);
      // }
    }
    findMovies();
  }, [search]);

  function getQuery(query) {
    setSearch(query);
  }
  return (
    <main>
      <SearchForm onSubmit={getQuery} />
    </main>
  );
}

export default MoviesPage;
