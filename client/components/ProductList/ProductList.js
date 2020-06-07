import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ProductList = ({ products }) => {
	return (
		<Card.Group stackable itemsPerRow='6'>
			{products.map((product) => {
				return (
					<Card key={product._id}>
						<Image src={product.imageUrl} size='medium' centered />
						<Card.Content>
							<Card.Header>{product.name}</Card.Header>
							<Card.Meta>
								<span>IN STOCK</span>
							</Card.Meta>
							<Card.Description>{product.description}</Card.Description>
							<span>{product.price}</span>
						</Card.Content>
					</Card>
				);
			})}
		</Card.Group>
	);
};

export default ProductList;
