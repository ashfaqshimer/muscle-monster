import Head from 'next/head';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import HeadContent from './HeadContent';

const Layout = ({ children, user }) => {
	return (
		<>
			<Head>
				<HeadContent />
				{/* StyleSheets */}
				<link rel='stylesheet' type='text/css' href='/static/styles.css' />
				<link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
				<link
					rel='stylesheet'
					href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
				/>
				<title>Muscle Monster | Simply the Best!</title>
			</Head>
			<Header />
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
