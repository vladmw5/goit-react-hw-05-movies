const API_KEY = 'a5de4dd52c0a146855f7375f14408b0e';
const BASE_URL = `https://api.themoviedb.org/3/`;

const queryStrings = {
  trending: () => `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
  search: (query, page = 1) =>
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  details: id => `${BASE_URL}movie/${id}?api_key=${API_KEY}`,
  credits: id => `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
  reviews: id => `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
};

//Мені захотілося використати тут звичайний fetchAPI, щоб повторити його
export async function fetchTrending() {
  const response = await fetch(queryStrings.trending());
  if (!response.ok) {
    return Promise.reject('Fetch Trending Movies Error: ' + response.status);
  }
  return response.json();
}

export async function fetchByQuery(query, page = 1) {
  if (!query) {
    return Promise.reject('Fetch By Query: cannot make an empty query');
  }
  const response = await fetch(queryStrings.search(query, page));
  if (!response.ok) {
    return Promise.reject('Fetch By Query Error: ' + response.status);
  }
  return response.json();
}

export async function fetchMovieDetails(id) {
  if (!id) {
    return Promise.reject('Fetch Movie Details: cannot query by this id ' + id);
  }
  const response = await fetch(queryStrings.details(id));
  if (!response.ok) {
    return Promise.reject('Fetch Movie Details: error: ' + response.status);
  }
  return response.json();
}

export async function fetchMovieCredits(id) {
  if (!id) {
    return Promise.reject('Fetch Movie Credits: cannot query by this id ' + id);
  }
  const response = await fetch(queryStrings.credits(id));
  if (!response.ok) {
    return Promise.reject('Fetch Movie Credits: error: ' + response.status);
  }
  return response.json();
}

export async function fetchMovieReviews(id) {
  if (!id) {
    return Promise.reject('Fetch Movie Reviews: cannot query by this id ' + id);
  }
  const response = await fetch(queryStrings.reviews(id));
  if (!response.ok) {
    return Promise.reject('Fetch Movie Reviews: error: ' + response.status);
  }
  return response.json();
}

const api = {
  fetchTrending,
  fetchByQuery,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default api;
