import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EventsPage, { loader as eventsLoader } from "./pages/Events";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
	loader as eventDetailLoader,
	action as deleteAction,
} from "./pages/EventDetail";
import EditEventPage from "./pages/EditEvent";
import EventsRootPage from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootPage from "./pages/Root";
import { action as addOrEditEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootPage />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						loader: eventsLoader,
					},
					{
						path: ":eventId",
						id: "event-detail",
						loader: eventDetailLoader,
						children: [
							{
								index: true,
								element: <EventDetailPage />,
								action: deleteAction,
							},
							{
								path: "edit",
								element: <EditEventPage />,
								action: addOrEditEventAction,
							},
						],
					},
					{
						path: "new",
						element: <NewEventPage />,
						action: addOrEditEventAction,
					},
				],
			},
			{
				path: "newsletter",
				element: <NewsletterPage />,
				action: newsletterAction,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
