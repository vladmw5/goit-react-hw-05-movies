import PropTypes from 'prop-types';

const TrendingMovieList = ({ movies }) => {
  return (
    <ul>{movies.map(({ title, id }) => title && <li key={id}>{title}</li>)}</ul>
  );
};

TrendingMovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrendingMovieList;
