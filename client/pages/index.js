import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from '../actions/category';
import BASE_URL from '../utils/baseUrl';
import CategoryList from '../components/Index/CategoryList/CategoryList';
import Loader from '../components/Loader/Loader';
import './index.scss';

const Home = ({ getCategories }) => {
	useEffect(() => {
		getCategories();
	});

	return (
		<div className='container index'>
			<Head>
				<title>Muscle Monster | Supplements Accessories Fitness</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='list'>
				<Loader />
			</div>

			{/* <CategoryList /> */}
		</div>
	);
};

// Home.getInitialProps = async (ctx) => {
// 	const res = await axios.get(`${BASE_URL}/api/v1/categories`);
// 	console.log(res);
// 	console.log(BASE_URL);
// 	return { categories: res.data };
// };

export default connect(null, { getCategories })(Home);
