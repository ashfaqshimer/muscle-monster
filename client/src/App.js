import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import './App.scss';
import { auth } from './utils/firebase';

function App() {
	const [currentUser, setcurrentUser] = useState(null);

	let unsubscribeFromAuth = null;

	useEffect(() => {
		unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
			setcurrentUser(user)
		);
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div className='App'>
			<Navigation currentUser={currentUser} />
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
