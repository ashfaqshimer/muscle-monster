import { withRouter } from 'next/router';
import Link from 'next/link';

import './MenuItem.scss';

const MenuItem = ({ name, imageUrl, size, history, linkUrl, match }) => {
	return (
		<Link href={'/shop/[collection]'} as={`/shop/${name}`}>
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
		</Link>
	);
};

export default withRouter(MenuItem);
