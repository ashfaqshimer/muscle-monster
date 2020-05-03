import App from 'next/app';
import { Provider } from 'react-redux';

import Layout from '../components/_App/Layout';
import store from '../store';

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Provider store={store}>
				<Layout>
					<Component />
				</Layout>
			</Provider>
		);
	}
}

export default MyApp;
