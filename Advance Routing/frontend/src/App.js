import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
	loader as eventDetailLoader,
	action as deleteAction,
} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import { action as addOrEditEventAction } from "./components/EventForm";
import RootPage from "./pages/Root";
import EventsRootPage from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

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
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
