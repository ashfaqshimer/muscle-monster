import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = () => {
	const [inputs, setInputs] = useState({ email: '', password: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputs({ email: '', password: '' });
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setInputs({ ...inputs, [name]: value });
		console.log(inputs);
	};

	return (
		<div className='SignIn'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					handleChange={handleChange}
					value={inputs.email}
					label='email'
					required
				/>
				<FormInput
					name='password'
					type='password'
					handleChange={handleChange}
					value={inputs.password}
					label='password'
					required
				/>
				<CustomButton type='submit'>Sign In</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
