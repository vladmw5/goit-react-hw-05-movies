import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import routes from 'service/routes';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const Credits = lazy(() => import('../pages/Credits'));
const Reviews = lazy(() => import('../pages/Reviews'));

const { home, movies, cast, reviews, movieId } = routes;

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={`${movies}/${movieId}`} element={<MoviePage />}>
          <Route path={cast} element={<Credits />} />
          <Route path={reviews} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
