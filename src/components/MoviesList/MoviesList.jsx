import { Link, useLocation } from 'react-router-dom';

import s from './MoviesList.module.css';

function MoviesList({ movies, state }) {
  const location = useLocation();
  console.log('location-MoviesList', location);

  const moviesItem = movies.map(({ id, title, name }) => (
    <li className={s.Item} key={id}>
      <Link
        to={`/movie/${id}`}
        state={{ ...location, search: location.search }}
      >
        {title} {name}
      </Link>
    </li>
  ));

  return <ul>{moviesItem}</ul>;
}

export default MoviesList;

// function MoviesList({ id, title, name, state }) {
//   console.log('state', state);
//   return (
//     <li className={s.Item}>
//       <Link to={`/movie/${id}`} state={state}>
//         {title} {name}
//       </Link>
//     </li>
//   );
// }

// export default MoviesList;
