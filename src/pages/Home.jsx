import { useState, useEffect } from 'react';

import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import api from '../service/movieAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .fetchTrending()
      .then(({ results }) => setMovies(results))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Trending movies of the day</h1>
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
