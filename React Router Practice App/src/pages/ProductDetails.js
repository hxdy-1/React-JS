import { useParams, Link } from "react-router-dom";

const ProductDetailsPage = () => {
	const { productId } = useParams();
	return (
		<>
			<h1>Products page</h1>
			<h4>{productId}</h4>
			<Link to=".." relative="path">
				&larr; Back
			</Link>
		</>
	);
};

export default ProductDetailsPage;
