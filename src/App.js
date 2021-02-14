import React from 'react';
// import { ToastContainer } from 'react-toastify';
import './App.css';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
// import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies search
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies/:movieId"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movie Details Page
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route exact path="/movies" component={MoviesPage} />

      <Route component={HomePage} />
    </Switch>
  </>
);

export default App;
