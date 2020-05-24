import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

// This component will consist of the MenuItem components
const Directory = ({ sections = [] }) => {
	return (
		<div className='Directory'>
			<div className='menu-items'>
				{sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		</div>
	);
};

// const mapStateToProps = createStructuredSelector({
// 	sections: selectDirectorySections,
// });

export default Directory;
