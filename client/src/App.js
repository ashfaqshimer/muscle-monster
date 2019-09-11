import React from 'react';
import Container from 'react-bootstrap/Container';

import Homepage from './pages/Homepage/Homepage';
import Navigation from './components/Navigation/Navigation';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Container>
				<Homepage />
			</Container>
		</div>
	);
}

export default App;
