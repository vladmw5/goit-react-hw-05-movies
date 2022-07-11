import PropTypes from 'prop-types';
import { Fragment } from 'react';

const URL_FOR_POSTERS = 'https://image.tmdb.org/t/p/original/';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  return (
    <div>
      <div>
        {poster_path ? (
          <img
            width="270"
            src={`${URL_FOR_POSTERS}${poster_path.slice(1)}`}
            alt={title}
          />
        ) : (
          <h1>This film has no Poster</h1>
        )}
      </div>
      <h2>{`${title} (${release_date?.split('-')[0]})`}</h2>
      <p>
        UserScore: <span>{`${Math.floor(vote_average * 10)}%`}</span>
      </p>
      {overview && (
        <Fragment>
          <h2>Overview</h2>
          <p>{overview}</p>
        </Fragment>
      )}
      <h2>Genres</h2>
      <ul>
        {genres?.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
