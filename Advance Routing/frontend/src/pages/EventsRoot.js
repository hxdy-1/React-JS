import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootPage = () => {
	return (
		<>
			<EventsNavigation />
			<Outlet />
		</>
	);
};

export default EventsRootPage;
