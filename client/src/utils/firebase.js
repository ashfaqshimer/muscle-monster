import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCdNs67l9tMFRUzLBvgsi3ExaCiLrxTHwY',
	authDomain: 'muscle-monster.firebaseapp.com',
	databaseURL: 'https://muscle-monster.firebaseio.com',
	projectId: 'muscle-monster',
	storageBucket: '',
	messagingSenderId: '1084775491611',
	appId: '1:1084775491611:web:098a3fada156fc8583f0be'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	// Get a snapshot of the current user
	const snapShot = await userRef.get();

	// If there is no existing user in the database, create a new one
	if (!snapShot.exits) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
