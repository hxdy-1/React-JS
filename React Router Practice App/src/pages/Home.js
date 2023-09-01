import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<h1>Home page</h1>
			<p>
				Go to the list of <Link to="products">Products</Link>
			</p>
		</>
	);
};

export default HomePage;
