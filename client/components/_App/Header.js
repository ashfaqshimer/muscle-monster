import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

import './Header.scss';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ user }) => {
	const router = useRouter();
	const isRoot = user && user.role === 'root';
	const isAdmin = user && user.role === 'admin';
	const isPermitted = isRoot || isAdmin;

	const isActive = (route) => {
		return route === router.pathname;
	};

	return (
		<Menu stackable fluid id='menu' className='Header'>
			<Link href='/'>
				<Menu.Item header active={isActive('/')}>
					<Icon name='trophy' size='large' />
					Muscle Monster
				</Menu.Item>
			</Link>

			<Menu.Menu position='right'>
				{isPermitted && (
					<Link href='/create'>
						<Menu.Item header active={isActive('/create')}>
							<Icon name='add square' size='large' /> Create
						</Menu.Item>
					</Link>
				)}

				{user ? (
					<>
						<Link href='/account'>
							<Menu.Item header active={isActive('/account')}>
								<Icon name='user' size='large' />
								Account
							</Menu.Item>
						</Link>

						<Menu.Item header>
							<Icon name='sign out' size='large' /> Log Out
						</Menu.Item>
					</>
				) : (
					<>
						<Link href='/signin'>
							<Menu.Item header active={isActive('/signin')}>
								<Icon name='sign in' size='large' /> Log In
							</Menu.Item>
						</Link>
						<Link href='/signup'>
							<Menu.Item header active={isActive('/signup')}>
								<Icon name='signup' size='large' /> Signup
							</Menu.Item>
						</Link>
					</>
				)}
				<Link href='/cart'>
					<Menu.Item header active={isActive('/cart')}>
						<Icon name='cart' size='large' /> Cart
					</Menu.Item>
				</Link>
			</Menu.Menu>
		</Menu>
	);
};

export default Header;
