import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './Messages/FlashMessagesList';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<NavigationBar />
				<FlashMessagesList />
				{this.props.children}
			</div>
		);
	}
}
