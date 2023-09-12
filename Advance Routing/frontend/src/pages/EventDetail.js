import {
	Await,
	defer,
	json,
	redirect,
	useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

import { Suspense } from "react";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
	const { event, events } = useRouteLoaderData("event-detail");

	return (
		<>
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
			>
				<Await resolve={event}>
					{(loadedEvent) => <EventItem event={loadedEvent} />}
				</Await>
			</Suspense>
			<Suspense
				fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
			>
				<Await resolve={events}>
					{(loadedEvents) => (
						<EventsList events={loadedEvents}></EventsList>
					)}
				</Await>
			</Suspense>
		</>
	);
};

export default EventDetailPage;

const loadEvent = async (id) => {
	const response = await fetch("http://localhost:8080/events/" + id);

	if (!response.ok) {
		throw json(
			{ message: "Couldn't fetch the details of this event :(" },
			{ status: 500 }
		);
	} else {
		const resData = await response.json();
		return resData.event;
	}
};

const loadEvents = async () => {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// return { isError: true, message: "Couldn't fetch events :(" };
		// throw { message: "Couldn't fetch events :(" };
		// throw new Response(
		// 	JSON.stringify({ message: "Couldn't fetch events :(" }),
		// 	{ status: 500 }
		// );
		throw json({ message: "Couldn't fetch events :(" }, { status: 500 });
	} else {
		const resData = await response.json();
		return resData.events;
		// return response;
	}
};

export const loader = async ({ params }) => {
	const id = params.eventId;

	return defer({
		event: await loadEvent(id),
		events: loadEvents(),
	});
};

export const action = async ({ params, request }) => {
	const id = params.eventId;

	const response = await fetch("http://localhost:8080/events/" + id, {
		method: request.method,
	});

	if (!response.ok) {
		throw json(
			{ message: "Couldn't delete this event :(" },
			{ status: 500 }
		);
	}

	return redirect("/events");
};
