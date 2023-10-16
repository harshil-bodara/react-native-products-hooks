import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {

	const [products,setProducts] = useState([]);
	const [loading,setLoading] = useState(false);


	useEffect(() => {
		fetchProducts();
	},[])

	const fetchProducts =  () => {
		setLoading(true);
		axios.get("https://fakestoreapi.com/products").then(({data}) => {
			setProducts(data)
			setLoading(false);
		}).catch((error) => {
			console.log("error", error)
		})
	};

	return {
		products,
		loading
	};
};

export default useProduct;
