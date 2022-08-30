import { Routes, Route } from 'react-router-dom';

import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
