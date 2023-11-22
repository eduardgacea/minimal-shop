import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const ProductsList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 2rem;
`;

function Products() {
	const { products } = useContext(ProductsContext);

	return (
		<>
			<h2>Products</h2>
			<ProductsList>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</ProductsList>
		</>
	);
}

export default Products;
