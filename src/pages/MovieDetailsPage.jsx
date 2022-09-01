import {
  useParams,
  Outlet,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'components/Button/Button';
import s from '../components/TrendMovies/TrendMovies.module.css';

function getClassName(props) {
  return props.isActive ? `${s.Active} ${s.Link}` : s.Link;
}

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
        setMovie(response.data);
      } catch (error) {
        setError(error);
      }
    }
    findMovieDetails();
  }, [movieId]);

  const location = useLocation();
  console.log('MovieDetailsPage', location);
  // console.log(location.state.from);
  // const backLink = location.state;

  const navigate = useNavigate();
  function goBack() {
    return navigate(`${location.state.pathname}${location.state.search}`);
  }
  return (
    <main>
      {movie && (
        <>
          {/* <Button to={backLink} onClick={goBack}>   GO BACK
          </Button> */}
          <Button type="button" title="> GO BACK <" onClick={goBack} />

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
          <ul className={s.List}>
            <li className={s.Item}>
              <NavLink
                to="cast"
                className={getClassName}
                state={{ ...location.state }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.Item}>
              <NavLink
                to="reviews"
                className={getClassName}
                state={{ ...location.state }}
              >
                Reviews
              </NavLink>
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
      <Outlet />
    </main>
  );
}

export default MovieDetailsPage;
