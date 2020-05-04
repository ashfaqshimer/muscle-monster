import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/MenuItem';
// import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import './Directory.scss';

// This component will consist of the MenuItem components
const Directory = ({ categories }) => {
	return (
		<div className='Directory'>
			<div className='menu-items'>
				{categories.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categories: state.category.categories,
});

export default connect(mapStateToProps)(Directory);
