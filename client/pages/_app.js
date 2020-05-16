import App from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Layout from '../components/_App/Layout';
import { store, persistor } from '../redux/store';

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Layout>
						<Component />
					</Layout>
				</PersistGate>
			</Provider>
		);
	}
}

export default MyApp;
