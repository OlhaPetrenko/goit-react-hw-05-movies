import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './Reviews.module.css';

const BASEURL = 'https://api.themoviedb.org/3';
const KEY = '5b0447e2e1e726ae474ba46ec861fdf3';
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function findReviews() {
      try {
        setLoading(true);
        const response = await axios.get(
          ` ${BASEURL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
        );

        setReviews(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    findReviews();
  }, [movieId]);

  return (
    <>
      {loading && (
        <h2 className={s.Load}>Відбувається завантаження даних...</h2>
      )}
      {reviews && (
        <ul>
          {reviews.map(({ id, content, author }) => (
            <li key={id}>
              <p className={s.Title}>{author}</p>
              {content}
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && !loading && (
        <h3>
          {' '}
          На жаль, жодного відгуку стосовно обраного фільму ще немає :-(((
        </h3>
      )}
      {error && <h2>{error.message}</h2>}
    </>
  );
}

export default Reviews;
