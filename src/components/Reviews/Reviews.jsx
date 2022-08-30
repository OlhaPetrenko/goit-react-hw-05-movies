import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './Reviews.module.css';
function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  console.log('movieId', movieId);
  useEffect(() => {
    async function findReviews() {
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5b0447e2e1e726ae474ba46ec861fdf3&language=en-US`
        );
        console.log('response', response.data.results);
        setReviews(response.data.results);
      } catch (error) {
        setError(error);
      }
    }
    findReviews();
  }, [movieId]);

  return (
    <>
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
      {reviews.length === 0 && (
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
