import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title = '', imageUrl, size }) => {
	return (
		<div className='MenuItem'>
			<div
				className='background-image'
				style={{ background: `url(${imageUrl})` }}
			/>
			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>Shop Now</span>
			</div>
		</div>
	);
};

export default MenuItem;
