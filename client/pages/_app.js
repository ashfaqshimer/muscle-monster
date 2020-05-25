import App from 'next/app';

// Redux related
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from '../redux/store';

import Layout from '../components/_App/Layout';

// class MyApp extends App {
// 	render() {
// 		const { Component, ...pageProps } = this.props;
// 		return (
// 			// <Provider store={store}>
// 			// 	<PersistGate persistor={persistor}>
// 			<Layout>
// 				<Component {...pageProps} />
// 			</Layout>
// 			// 	</PersistGate>
// 			// </Provider>
// 		);
// 	}
// }

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
