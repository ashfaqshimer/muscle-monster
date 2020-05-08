import React from 'react';
// import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ name, imageUrl, size, linkUrl }) => {
	return (
		<div
			className='MenuItem'
			// onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div
				className='background-image'
				style={{ background: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{name.toUpperCase()}</h1>
				<span className='subtitle'>Shop Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
