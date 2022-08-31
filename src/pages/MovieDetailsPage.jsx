import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '../components/Button/Button';
import s from '../components/MoviesList/MoviesList.module.css';
function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findMovieDetails() {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/movie/${movieId}?api_key=5b0447e2e1e726ae474ba46ec861fdf3&language=en-US`
        );
        // console.log('response', response.data);
        setMovie(response.data);
        // console.log('movie', movie);
      } catch (error) {
        setError(error);
      }
    }
    findMovieDetails();
  }, [movieId]);
  return (
    <main>
      {movie && (
        <>
          <Button title="GO BACK" />
          <h2>{movie.original_title}</h2>
          <div className={s.Card}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.original_title}
              width="200"
            />
            <div>
              <p>User score {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(el => el.name).join(', ')}</p>
            </div>
          </div>
          <h3>Additional information</h3>
          <ul>
            <li className={s.Item}>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      {error && (
        <>
          <h2>Щось пішло не так :((( </h2>
          <p>{error.message}</p>
        </>
      )}

      <hr />
      <Outlet />
    </main>
  );
}

export default MovieDetailsPage;
