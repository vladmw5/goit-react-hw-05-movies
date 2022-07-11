import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import routes from '../../service/routes';

const TrendingMovieList = ({ movies }) => {
  const { pathname, search } = useLocation();

  return (
    <ul>
      {movies.map(
        ({ title, id }) =>
          title && (
            <li key={id}>
              <Link
                to={`/${routes.movies}/${id}`}
                state={{ from: `${pathname}${search}` }}
              >
                {title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

TrendingMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrendingMovieList;
