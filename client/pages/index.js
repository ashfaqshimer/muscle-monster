import './index.scss';
import Directory from '../components/Directory/Directory';
import { getCollections } from '../actions/collections';

const HomePage = ({ collections }) => {
	console.log(collections);
	return (
		<div className='HomePage'>
			<Directory />
		</div>
	);
};

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const collections = await getCollections();

	console.log(collections);

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			collections,
		},
	};
}

export default HomePage;
