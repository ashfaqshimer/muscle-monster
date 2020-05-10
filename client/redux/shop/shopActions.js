import {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE
} from '../actionTypes';
import {
	firestore,
	convertCollectionsSnapshotToMap
} from '../../utils/firebase';

export const fetchCollectionsStart = () => ({ type: FETCH_COLLECTIONS_START });

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = (error) => ({
	type: FETCH_COLLECTIONS_FAILURE,
	payload: error
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
	const collectionRef = firestore.collection('collections');
	dispatch(fetchCollectionsStart);

	collectionRef
		.get()
		.then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			dispatch(fetchCollectionsSuccess(collectionsMap));
		})
		.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};

export const updateCollections = () => (collectionsMap) => ({
	type: FETCH_COLLECTIONS_START,
	payload: collectionsMap
});
