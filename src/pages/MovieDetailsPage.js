import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Cast from '../pages/Cast';
import Reviews from '../pages/Reviews';

const MovieDetailsPage = () => {
  return (
    <>
      <h1>Movie Details Page</h1>
      <ul>
        <li>
          <NavLink
            exact
            to="/movies/movieId/cast"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies/movieId/reviews"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/movies/movieId/cast" component={Cast} />
        <Route exact path="/movies/movieId/reviews" component={Reviews} />
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
