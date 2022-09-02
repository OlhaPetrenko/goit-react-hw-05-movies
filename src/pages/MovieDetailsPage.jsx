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
const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '5b0447e2e1e726ae474ba46ec861fdf3';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findMovieDetails() {
      try {
        setStatus('pending');
        const response = await axios.get(
          ` ${BASEURL}/movie/${movieId}?api_key=${KEY}&language=en-US`
        );
        setMovie(response.data);
        setStatus('resolved');
      } catch (error) {
        setError(error);
        setStatus('rejected');
      }
    }
    findMovieDetails();
  }, [movieId]);

  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();
  function goBack() {
    return navigate(from);
  }
  // function goBack() {
  //   return navigate(`${location.state.pathname}${location.state.search}`);
  // }
  return (
    <main>
      {status === 'pending' && (
        <h2 className={s.Load}>Відбувається завантаження даних...</h2>
      )}
      {status === 'resolved' && movie && (
        <>
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
              <NavLink to="cast" className={getClassName} state={{ from }}>
                Cast
              </NavLink>
            </li>
            <li className={s.Item}>
              <NavLink to="reviews" className={getClassName} state={{ from }}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      )}
      {status === 'resolved' && !movie && <h2>Щось пішло не так :((( </h2>}
      {status === 'rejected' && <h1>{error.message}</h1>}

      <Outlet />
    </main>
  );
}

export default MovieDetailsPage;
