const BASE_URL = `https://api.themoviedb.org/3/`;
const MY_KEY = `66acb4573ba980ae8ac5981a52e8de6b`;
const imgSize = 'w500';
const IMG_URL = `https://image.tmdb.org/t/p/${imgSize}/`;
const defaultImage = `${IMG_URL}wwemzKWzjKYJFfCeiB57q3r4Bcm.png`;
// const PER_PAGE = 12;
// const APIaccessKeyV4auth = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFjYjQ1NzNiYTk4MGFlOGFjNTk4MWE1MmU4ZGU2YiIsInN1YiI6IjYwMjY5MjZiZDZjMzAwMDA0MTcwYjQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfVRytfR82QgUddj6bVVXNcEbxcj7_D2z_leUhvgTds`;

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export function fetchTrendingMovies() {
  const url = `${BASE_URL}trending/all/day?api_key=${MY_KEY}`;
  // const url = `${BASE_URL}/?q=${query}&page=${page}&key=${MY_KEY}&image_type_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response
        .json()
        .then(data => data.results)
        .then(results =>
          results.filter(movieArray => movieArray.media_type === 'movie'),
        );
    }
    return Promise.reject(new Error('Trending movies not found!'));
  });
}

const themoviedbAPI = {
  fetchTrendingMovies,
  MY_KEY,
  BASE_URL,
  defaultImage,
  IMG_URL,
};

export default themoviedbAPI;
