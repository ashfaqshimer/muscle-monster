// import ProductSummary from '../../../components/Product/ProductSummary';
// import ProductAttributes from '../components/Product/ProductAttributes';

const ProductPage = ({ product, user }) => {
	return (
		<div>
			{/* <ProductSummary user={user} {...product} />
			<ProductAttributes user={user} {...product} /> */}
			Product page
		</div>
	);
};

// Product.getInitialProps = async ({ query: { _id } }) => {
// 	try {
// 		const url = `${baseUrl}/api/product`;
// 		const payload = { params: { _id } };
// 		const response = await axios.get(url, payload);

// 	} catch (err) {
// 		console.log(err);
// 	}
// };

export async function getStaticProps({ params }) {
	// Write an action to fetch the product by slug
}

export async function getStaticPaths() {
	// Map all possible paths from /products routes
	// Make call to fetch products
}

export default ProductPage;
