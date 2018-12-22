import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './Router';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Router />
				</div>
			</div>
		);
	}
}

export default App;
