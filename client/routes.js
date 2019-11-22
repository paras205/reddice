import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import signUpPage from './components/signup/SignupPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings} />
		<Route path="signup" component={signUpPage} />
	</Route>
);
