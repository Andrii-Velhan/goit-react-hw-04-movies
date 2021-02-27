import React, { Suspense, lazy } from 'react';
// import { ToastContainer } from 'react-toastify';
import './App.css';
import routes from './routes';
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import AppBar from './components/Appbar';
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
// import NotFoundPage from './pages/NotFoundPage';

const HomePage = lazy(() =>
  import('./pages/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /* webpackChunkName: "home-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
