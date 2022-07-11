import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from 'service/movieAPI';
import Loader from 'components/Loader';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

const Credits = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchMovieCredits(movieId)
      .then(setCast)
      .catch(console.error)
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {cast?.cast.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  width="100"
                  src={`${POSTER_PATH}${profile_path}`}
                  alt={name}
                />
              ) : (
                <p>This actor has no image</p>
              )}
              <p>{name}</p>
              <p>
                Known as: <span>{character}</span>
              </p>
              <br />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Credits;
