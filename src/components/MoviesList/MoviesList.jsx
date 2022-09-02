import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviesList.module.css';

function MoviesList({ movies }) {
  const location = useLocation();

  const moviesItem = movies.map(({ id, title, name }) => (
    <li className={s.Item} key={id}>
      <Link to={`/movie/${id}`} state={{ from: location }}>
        {title} {name}
      </Link>
    </li>
  ));

  return <ul>{moviesItem}</ul>;
}

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  contamoviescts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
