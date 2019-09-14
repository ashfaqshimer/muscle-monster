import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './components/Navigation/Navigation';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import './App.scss';
import { auth, createUserProfileDocument } from './utils/firebase';
import { setCurrentUser } from './reducers/user/userActions';

function App({ currentUser, setCurrentUser }) {
	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					userRef.onSnapshot((snapShot) => {
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						});
					});
				}

				setCurrentUser(userAuth);
			}
		);
		return () => {
			unsubscribeFromAuth();
		};
	}, []);

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
						render={() =>
							currentUser ? (
								<Redirect to='/' />
							) : (
								<AuthenticationPage />
							)
						}
					/>
				</Switch>
			</Container>
		</div>
	);
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
