import Head from 'next/head';
// import Header from '../components/Header/Header';

import { connect } from 'react-redux';
import { getCategories } from '../actions/category';

import { useEffect } from 'react';

const Home = ({ getCategories }) => {
	useEffect(() => {
		getCategories();
	});

	return (
		<div className='container'>
			<Head>
				<title>Muscle Monster | Supplements Accessories Fitness</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div>Categories</div>
		</div>
	);
};

export default connect(null, { getCategories })(Home);
