import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => {
	console.log(match);
	return (
		<div>
			<Route
				exact
				path={`${match.path}`}
				render={() => <CollectionOverview />}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={(routeProps) => <CollectionPage {...routeProps} />}
			/>
		</div>
	);
};

export default ShopPage;
