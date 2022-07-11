import { Routes, Route } from 'react-router-dom';

import routes from 'service/routes';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';

const { home, movies, cast, reviews, movieId } = routes;

export const App = () => {
  return (
    <Routes>
      <Route path={home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<></>} />
      </Route>
    </Routes>
  );
};
