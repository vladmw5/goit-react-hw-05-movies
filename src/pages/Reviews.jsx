import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from 'service/movieAPI';
import Loader from 'components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <section>
      {isLoading && <Loader />}
      {reviews && !reviews?.length && <h3>This film has no reviews</h3>}
      <ul>
        {reviews?.map(({ author, content, id }) => (
          <li key={id}>
            <h3>
              Author: <span>{author}</span>
            </h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
