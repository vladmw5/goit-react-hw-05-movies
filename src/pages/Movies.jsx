import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from 'service/movieAPI';
import Loader from 'components/Loader';
import MovieList from 'components/MovieList';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onInput = event => {
    setMovie(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!movie) {
      toast.error('Empty queries are prohibited');
    }
    setSearchParams({ query: movie });
    setMovie('');
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    api
      .fetchByQuery(query, page)
      .then(({ results }) => setFoundMovies(results))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [query, page]);

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input name="movie" value={movie} onChange={onInput} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? <Loader /> : <MovieList movies={foundMovies}></MovieList>}
      <ToastContainer />
    </main>
  );
};

export default Movies;
