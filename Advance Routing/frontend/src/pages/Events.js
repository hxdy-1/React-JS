import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
	const { events } = useLoaderData();
	// console.log(events);
	// const events = data.events;

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	// return <EventsList events={data.events} />;

	return (
		<Suspense
			fallback={<p style={{ textAlign: "center" }}>Loading events...</p>}
		>
			<Await resolve={events}>
				{(loadedEvents) => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
}

export default EventsPage;

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

export const loader = () => {
	return defer({
		events: loadEvents(),
	});
};
