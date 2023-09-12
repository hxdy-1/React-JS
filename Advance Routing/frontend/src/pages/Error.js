import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
	const error = useRouteError();
	// console.error(error);

	let title = "An error occurred ";
	let message = "something went wrong :(";

	if (error.status === 500) {
		title = "An error occurred " + error.status;
		message = error.data.message;
	}

	if (error.status === 404) {
		title = "Not found " + error.status;
		message = "Couldn't find resource or page:(";
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<h4>{message}</h4>
			</PageContent>
		</>
	);
};

export default ErrorPage;
