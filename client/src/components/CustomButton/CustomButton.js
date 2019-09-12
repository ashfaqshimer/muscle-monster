import React from 'react';

import './CustomButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<button className='CustomButton' {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
