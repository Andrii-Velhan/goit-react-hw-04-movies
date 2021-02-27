import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import routes from '../routes';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title || name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(MovieList);
