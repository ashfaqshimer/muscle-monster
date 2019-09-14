import React from 'react';

import './CustomButton.scss';

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => {
	return (
		<button
			className={`${isGoogleSignIn && 'google-sign-in'} ${inverted &&
				'inverted'} CustomButton`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
