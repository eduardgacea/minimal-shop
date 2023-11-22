import { useState, createContext } from "react";
import { productsData } from "../data/productsData.json";

const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
	const [products] = useState([...productsData]);

	function getProductById(id) {
		return products.find((product) => product.id === id);
	}

	return <ProductsContext.Provider value={{ products, getProductById }}>{children}</ProductsContext.Provider>;
}

export { ProductsContext, ProductsContextProvider };
