import axios from 'axios';

import BASE_URL from '../../utils/baseUrl';
import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE,
} from '../actionTypes';
// import {
// 	firestore,
// 	convertCollectionsSnapshotToMap,
// } from '../../utils/firebase';

export const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START });

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (error) => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: error,
});

export const fetchCollectionsStartAsync = () => async (dispatch) => {
	try {
		dispatch(fetchCollectionsStart);
		const collections = await axios.get(`${BASE_URL}/api/v1/collections`);
		console.log('fetchCollectionsStartAsync -> collections', collections);
		dispatch(fetchCollectionsSuccess(collections));
	} catch (error) {
		dispatch(fetchCollectionsFailure(error.message));
	}

	// const collectionRef = firestore.collection('collections');
	// dispatch(fetchCollectionsStart);

	// collectionRef
	// 	.get()
	// 	.then((snapshot) => {
	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 		dispatch(fetchCollectionsSuccess(collectionsMap));
	// 	})
	// 	.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};

export const updateCollections = () => (collectionsMap) => ({
	type: FETCH_COLLECTIONS_START,
	payload: collectionsMap,
});
