import React from 'react';
import { Link } from 'react-router';

export default function NavigationBar() {
	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar"
					>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<Link to="/" className="navbar-brand">
						Red Dice
					</Link>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
