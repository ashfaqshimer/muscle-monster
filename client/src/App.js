import React from 'react';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';

import './App.scss';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Container>
				<Switch>
					<Route exact path='/' render={() => <Homepage />} />
					<Route exact path='/shop' render={() => <ShopPage />} />
					<Route
						exact
						path='/signin'
						render={() => <AuthenticationPage />}
					/>
				</Switch>
			</Container>
		</div>
	);
}

export default App;
