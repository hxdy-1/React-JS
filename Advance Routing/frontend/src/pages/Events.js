import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
	const data = useLoaderData();
	// console.log(events);
	// const events = data.events;

	// if (data.isError) {
	// 	return <p>{data.message}</p>;
	// }

	return <EventsList events={data.events} />;
}

export default EventsPage;

export const loader = async () => {
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
		// const resData = await response.json();
		// return resData.events;
		return response;
	}
};
