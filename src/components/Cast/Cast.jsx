import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './Cast.module.css';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '5b0447e2e1e726ae474ba46ec861fdf3';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findCast() {
      try {
        setLoading(true);
        const response = await axios.get(
          ` ${BASEURL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
        );

        setCast(response.data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    findCast();
  }, [movieId]);

  return (
    <>
      {loading && (
        <h2 className={s.Load}>Відбувається завантаження даних...</h2>
      )}
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
      {cast.length === 0 && !loading && (
        <h2> На жаль, інформація щодо акторського складу відсутня :-(((</h2>
      )}
      {error && <h2>{error.message}</h2>}
    </>
  );
}

export default Cast;
