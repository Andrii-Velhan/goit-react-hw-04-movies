const BASE_URL = `https://api.themoviedb.org/3/`;
const MY_KEY = `66acb4573ba980ae8ac5981a52e8de6b`;
// const PER_PAGE = 12;
// const APIaccessKeyV4auth = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmFjYjQ1NzNiYTk4MGFlOGFjNTk4MWE1MmU4ZGU2YiIsInN1YiI6IjYwMjY5MjZiZDZjMzAwMDA0MTcwYjQ1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VfVRytfR82QgUddj6bVVXNcEbxcj7_D2z_leUhvgTds`;

export function fetchImg(page, query) {
  const url = `${BASE_URL}movie/550?api_key=${MY_KEY}`;
  // const url = `${BASE_URL}/?q=${query}&page=${page}&key=${MY_KEY}&image_type_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Image ${query} not found!`));
  });
}

const api = {
  fetchImg,
};

export default api;
