import { Link } from 'react-router-dom';

import s from './MovieItem.module.css';

function MovieItem({ id, title, name }) {
  return (
    <li className={s.Item}>
      <Link to={`/movie/${id}`}>
        {title} {name}
      </Link>
    </li>
  );
}

export default MovieItem;
