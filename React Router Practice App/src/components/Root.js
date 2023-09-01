import MainNav from "./MainNav";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<MainNav />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Root;
