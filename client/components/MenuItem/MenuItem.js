import { withRouter } from 'next/router';
import Link from 'next/link';

import './MenuItem.scss';

const MenuItem = ({ name, slug, imageUrl }) => {
	return (
		<Link href={'/shop/[collection]'} as={`/shop/${slug}`}>
			<div className='MenuItem'>
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
