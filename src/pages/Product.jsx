import { useContext } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../contexts/ProductsContext";

function Product() {
	const { productId } = useParams();
	const { getProductById } = useContext(ProductsContext);

	const id = Number(productId);
	const product = getProductById(id);

	const { name, description, price } = product;

	return (
		<div>
			<p>{name}</p>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	);
}

export default Product;
