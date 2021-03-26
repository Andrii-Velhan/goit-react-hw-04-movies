import React, { Suspense, lazy } from 'react';
// import { ToastContainer } from 'react-toastify';
import './App.css';
import routes from './routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
// import AppBar from './components/Appbar';
import Layout from './components/Layout'
// import Searchbar from './components/Searchbar';
// import ImageGallery from './components/ImageGallery';
// import NotFoundPage from './pages/NotFoundPage';

const HomePage = lazy(() =>
	import('./pages/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
	import(
		'./pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
	),
);
const MoviesPage = lazy(() =>
	import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const App = () => (
	<>
		<Layout>

			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path={routes.home} component={HomePage} />
					<Route path={routes.movieDetails} component={MovieDetailsPage} />
					<Route exact path={routes.movies} component={MoviesPage} />
					<Redirect to={routes.home} />
				</Switch>
			</Suspense>

		</Layout>
	</>
);

export default App;
