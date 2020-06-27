import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Link from 'next/link';

const ProductList = ({ products }) => {
	return (
		<Card.Group stackable itemsPerRow='6'>
			{products.map(({ _id, imageUrl, name, description, price }) => {
				return (
					<Link href={'/products/[id]'} as={`/products/${_id}`}>
						<Card key={_id}>
							<Image src={imageUrl} size='medium' centered />
							<Card.Content>
								<Card.Header>{name}</Card.Header>
								<Card.Meta>
									<span>IN STOCK</span>
								</Card.Meta>
								<Card.Description>{description}</Card.Description>
								<span>{price}</span>
							</Card.Content>
						</Card>
					</Link>
				);
			})}
		</Card.Group>
	);
};

export default ProductList;
