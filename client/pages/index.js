import './index.scss';
import Directory from '../components/Directory/Directory';
import { getCollections } from '../actions/collections';

function HomePage({ sections }) {
	console.log('HomePage -> props', sections);
	return (
		<div className='HomePage'>
			<Directory sections={sections} />
		</div>
	);
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library
	const collections = await getCollections();
	const sections = collections.data;

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			sections,
		},
	};
}

export default HomePage;
