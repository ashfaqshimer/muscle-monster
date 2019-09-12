import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import './Navigation.scss';

const Navigation = () => {
	return (
		<Navbar className='Navigation' bg='light' expand='md'>
			<Link to='/'>
				<Navbar.Brand>Muscle Monster</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Form inline>
					<FormControl
						type='text'
						placeholder='Search'
						className='mr-sm-2'
					/>
					<Button variant='outline-success'>Search</Button>
				</Form>
				<Nav className='ml-auto options'>
					<Link className='option nav-link' to='/shop'>
						SHOP
					</Link>
					<Link className='option nav-link' to='/shop'>
						CONTACT
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
