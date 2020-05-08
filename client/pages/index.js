import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from '../redux/actions/category';
import BASE_URL from '../utils/baseUrl';
import CategoryList from '../components/Index/CategoryList/CategoryList';
import Loader from '../components/Loader/Loader';
import './index.scss';
import Directory from '../components/Directory/Directory';

const Home = ({ getCategories, isLoading }) => {
	useEffect(() => {
		getCategories();
	});

	return (
		<div className='container index'>
			<Head>
				<title>Muscle Monster | Supplements Accessories Fitness</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='list'>{isLoading ? <Loader /> : <Directory />}</div>

			{/* <CategoryList /> */}
		</div>
	);
};

const mapStateToProps = (state) => ({ isLoading: state.category.loading });

export default connect(mapStateToProps, { getCategories })(Home);
