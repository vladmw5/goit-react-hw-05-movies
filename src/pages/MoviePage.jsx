import { useEffect, useState, Suspense } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';

import api from 'service/movieAPI';
import routes from 'service/routes';
import Loader from 'components/Loader';
import MovieCard from 'components/MovieCard';

const MoviePage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const navTo = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();

  const from = location.state?.from;

  const goBack = () => navTo(from);

  const { cast, reviews } = routes;

  useEffect(() => {
    setLoading(true);
    api
      .fetchMovieDetails(movieId)
      .then(setMovie)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <main>
      {/* Кнопка "повернутись" не буде відображена, якщо from не існує. */}
      {from && (
        <button type="button" onClick={goBack}>
          Go back
        </button>
      )}
      <hr />
      {isLoading ? <Loader /> : <MovieCard movie={movie} />}
      <hr />
      <Link to={cast} state={{ from }}>
        Credits
      </Link>
      <br />
      <Link to={reviews} state={{ from }}>
        Reviews
      </Link>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviePage;
