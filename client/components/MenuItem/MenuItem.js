import React from 'react';
import { withRouter } from 'next/router';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<div
			className='MenuItem'
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
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

export default withRouter(MenuItem);
