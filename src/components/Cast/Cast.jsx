import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './Cast.module.css';
function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  console.log('movieId', movieId);
  useEffect(() => {
    async function findCast() {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5b0447e2e1e726ae474ba46ec861fdf3&language=en-US`
        );
        console.log('response', response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        setError(error);
      }
    }
    findCast();
  }, [movieId]);
  console.log('useLocation', useLocation());

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className={s.Item}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${profile_path}`}
                  alt="name"
                  width="100"
                />
              ) : (
                <p className={s.NoPhoto}>Фото актора відсутнє! </p>
              )}
              <div>
                <p className={s.Name}> {name}</p>
                <p>character: {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cast.length === 0 && (
        <p> На жаль, інформація щодо акторського складу відсутня :-(((</p>
      )}
      {error && <h2>{error.message}</h2>}
    </>
  );

  //   <h3>Акторський склад</h3>;
}

export default Cast;
