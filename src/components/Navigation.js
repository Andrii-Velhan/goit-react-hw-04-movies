import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

const Navigation = () => (
	<ul className="NavList">
		<li className="NavList--item">
			<NavLink
				exact
				to={routes.home}
				className="NavLink"
				activeClassName="NavLink--active"
			>
				Home
      </NavLink>
		</li>
		<li className="NavList--item">
			<NavLink
				exact
				to={routes.movies}
				className="NavLink"
				activeClassName="NavLink--active"
			>
				Movies search
      </NavLink>
		</li>
	</ul>
);

export default Navigation;
